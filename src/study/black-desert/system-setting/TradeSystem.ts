import UserInfo from "../common/UserInfo";
import HeraldryFame from "../trade-market/HeraldryFame";
import DiffBenefitDetailParams from "./DiffBenefitDetailParams";
import DiffBenefitDetailInfo from "./DiffBenefitDetailInfo";
import {BILLION} from "../../typescript/common/NumberUnit";

export const HERALDRY_FAME_ARRAY = Object.freeze([
    new HeraldryFame(0, 0),
    new HeraldryFame(1000, 0.005),
    new HeraldryFame(4000, 0.01),
    new HeraldryFame(7000, 0.015),
]);

const MAX_HERALDRY_FAME_AMOUNT = HERALDRY_FAME_ARRAY[HERALDRY_FAME_ARRAY.length - 1].amount;

//기본적으로 거래소에서 계산시 거래액의 30%를 세금으로 지불됨
const TRADE_MARKET_TAX = 0.3;

//기본적으로 영지세금 5%도 함께 지불됨.
const COMMANDERY_TAX = 0.05;

//밸륲패키지가 있을경우, 정산금액의 30%를 추가로 돌려받을 수 있음.
const VALUE_PACKAGE_PAY_BACK = 0.3;

//가문명성 등급에 따라, 정산금액의 0.5%p, 1.0%p, 1.5%p를 추가로 돌려받을 수 있음.
const HERALDRY_FAME_PERCENT_POINTS = [0, 0.005, 0.01, 0.015];

/**
 * @param num
 * @return 소수부븐을 버리고 3자리마다 ,로 구분한 문자열을 반환
 */
export function getNumberWithCommaAndNaturalNumber(num: number): string {
    return Math.floor(num).toLocaleString();
}

export function getBreakEvenPrice(userInfo: UserInfo, price: number | string): number {
    return trade(userInfo, price, _getBreakEvenPrice);
}

export function getSettlementPrice(userInfo: UserInfo, price: number | string): number {
    return trade(userInfo, price, _getSettlementPrice);
}

function trade(userInfo: UserInfo, price: number | string, callback: Function): number {

    const _price = Number(price);
    const settlementTax = getSettlementTax(userInfo);

    return Number(callback(settlementTax, _price).toFixed(0));
}

function getSettlementTax(userInfo: UserInfo): number {

    const _userInfoHeraldryFame = Number(userInfo.heraldryFame);

    let settlementTax = 1 - (TRADE_MARKET_TAX + COMMANDERY_TAX);

    if(userInfo.haveValuePackage)
        settlementTax =  settlementTax * (1 + VALUE_PACKAGE_PAY_BACK);

    const heraldryFameStep = getHeraldryFameStep(_userInfoHeraldryFame);

    settlementTax += heraldryFameStep !== -1 ? HERALDRY_FAME_PERCENT_POINTS[heraldryFameStep] : 0;

    return settlementTax;
}

export function getDiffBenefitDetailInfo(userInfo: UserInfo, params: DiffBenefitDetailParams): DiffBenefitDetailInfo {

    const buyPrice = Number(params.buyPrice);
    const investPrice = Number(params.investPrice);
    const maxTradeQuantity = Number(params.maxTradeQuantity);

    const _realInvestPrice = (investPrice > 0) ? investPrice : BILLION;
    const benefit = getSettlementPrice(userInfo, params.sellPrice) - buyPrice;
    const totalBenefit = _realInvestPrice * benefit / buyPrice;
    const totalBuyQuantityForTotalBenefit = totalBenefit / benefit;
    const minTradeCount = maxTradeQuantity > 0 ? totalBuyQuantityForTotalBenefit / maxTradeQuantity : 0;

    return new DiffBenefitDetailInfo(_realInvestPrice, totalBenefit, maxTradeQuantity, minTradeCount);
}

/**
 * @param tax 세금
 * @param buyPrice 구매가격
 * @return 세금 뗐을 때의 구매가격이 현재 구매가격과 같아지는 최소 구매가격을 반환
 */
function _getBreakEvenPrice(tax: number, buyPrice: number): number {
    return buyPrice / tax;
}

/**
 * @param tax 세금
 * @param price 1개당 가격
 * @return 세금를 뗀 가격을 반환
 */
function _getSettlementPrice(tax: number, price: number): number {
    return price * tax;
}

export function getHeraldryFameStep(userHeraldryFameAmount: number): number {

    if(userHeraldryFameAmount >= MAX_HERALDRY_FAME_AMOUNT)
        return HERALDRY_FAME_ARRAY.length - 1;

    else
        return HERALDRY_FAME_ARRAY.findIndex(heraldryFame => userHeraldryFameAmount < heraldryFame.amount) - 1;
}

/**
 * @param userHeraldryFameAmount 사용자의 가문명성
 * @return 사용자의 가문명성 수치의 경계값을 반환.
 * @example 0~1000, 1000~4000, 4000~7000 단계가 구분되었을 때, (1200) => 1000, (562) => 0, (4597) => 4000
 */
export function getHeraldryFameStepAmount(userHeraldryFameAmount: number) {
    return HERALDRY_FAME_ARRAY[getHeraldryFameStep(userHeraldryFameAmount)].amount;
}
