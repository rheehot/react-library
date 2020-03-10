import BlackDesertUserInfo from "./BlackDesertUserInfo";
import HeraldryFame from "./HeraldryFame";

export enum Item {

    //펄템(= 캐쉬템)은 거래수수료 면제
    PEARL_ITEM = "pearl-item",

    //펄템(= 캐쉬템)이 아니면 거래수수료 적용
    NOT_PEARL_ITEM = "not-pearl-item"
}

export const HERALDRY_FAME_ARRAY = Object.freeze([
    new HeraldryFame(0, 0),
    new HeraldryFame(1000, 0.005),
    new HeraldryFame(4000, 0.01),
    new HeraldryFame(7000, 0.015),
]);

const MAX_HERALDRY_FAME_AMOUNT = HERALDRY_FAME_ARRAY[HERALDRY_FAME_ARRAY.length - 1].amount;

//기본적으로 거래소에서 계산시 거래액의 30%를 수수료로 지불됨
const TRADE_MARKET_FEE = 0.3;

//기본적으로 영지세금 5%도 함께 지불됨.
const COMMANDERY_FEE = 0.05;

//밸륲패키지가 있을경우, 정산금액의 30%를 추가로 돌려받을 수 있음.
const VALUE_PACKAGE_PAY_BACK = 0.3;

//가문명성 등급에 따라, 정산금액의 0.5%p, 1.0%p, 1.5%p를 추가로 돌려받을 수 있음.
const HERALDRY_FAME_PERCENT_POINTS = [0, 0.005, 0.01, 0.015];

export function getBreakEvenAmount(item: Item, userInfo: BlackDesertUserInfo, sellAmount: number | string): number {
    return trade(item, userInfo, sellAmount, _getBreakEvenAmount);
}

export function getSettlementAmount(item: Item, userInfo: BlackDesertUserInfo, sellAmount: number | string): number {
    return trade(item, userInfo, sellAmount, _getSettlementAmount);
}

function trade(item: Item, userInfo: BlackDesertUserInfo, sellAmount: number | string, callback: Function): number {

    const _sellAmount = Number(sellAmount);
    const settlementFee = getSettlementFee(item, userInfo);

    return callback(settlementFee, _sellAmount);
}

function getSettlementFee(item: Item, userInfo: BlackDesertUserInfo): number {

    const _userInfoHeraldryFame = Number(userInfo.heraldryFame);

    switch (item) {
        case Item.PEARL_ITEM:
            return 1;

        case Item.NOT_PEARL_ITEM:
            let settlementFee = 1 - (TRADE_MARKET_FEE + COMMANDERY_FEE);

            if(userInfo.haveValuePackage)
                settlementFee =  settlementFee * (1 + VALUE_PACKAGE_PAY_BACK);

            const heraldryFameStep = getHeraldryFameStep(_userInfoHeraldryFame);

            settlementFee += heraldryFameStep !== -1 ? HERALDRY_FAME_PERCENT_POINTS[heraldryFameStep] : 0;

            return settlementFee;
    }
}

/**
 * @param fee 수수료
 * @param buyAmount 구매금액
 * @return 수수료 뗐을 때의 구매금액이 현재 구매금액과 같아지는 최소 구매금액을 반환
 */
function _getBreakEvenAmount(fee: number, buyAmount: number): number {
    return buyAmount / fee;
}

/**
 * @param fee 수수료
 * @param buyAmount 구매금액
 * @return 수수료를 뗀 금액을 반환
 */
function _getSettlementAmount(fee: number, amount: number): number {
    return amount * fee;
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
