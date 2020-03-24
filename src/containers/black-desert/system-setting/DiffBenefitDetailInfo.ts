import {getNumberWithCommaAndNaturalNumber} from "../../../utils/black-desert/TradeSystem";

export default class DiffBenefitDetailInfo {
    commaInvestPrice: string;
    commaTotalBenefit: string;
    commaMaxTradeQuantity: string;
    commaMinTradeCount: string;

    investPrice: number;
    totalBenefit: number;
    maxTradeQuantity: number;
    minTradeCount: number;

    constructor(investPrice: number = 0, totalBenefit: number = 0, maxTradeQuantity: number = 0, minTradeCount: number = 0) {
        this.commaInvestPrice = getNumberWithCommaAndNaturalNumber(investPrice);
        this.commaTotalBenefit = getNumberWithCommaAndNaturalNumber(totalBenefit);
        this.commaMaxTradeQuantity = getNumberWithCommaAndNaturalNumber(maxTradeQuantity);
        this.commaMinTradeCount = getNumberWithCommaAndNaturalNumber(minTradeCount);

        this.investPrice = investPrice;
        this.totalBenefit = totalBenefit;
        this.maxTradeQuantity = maxTradeQuantity;
        this.minTradeCount = minTradeCount;
    }
}
