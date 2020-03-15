export default class DiffBenefitDetailParams {
    buyPrice: number;
    sellPrice: number;
    investPrice: number;
    maxTradeQuantity: number;

    constructor(buyPrice: number | string, sellPrice: number | string, investPrice: number | string, maxTradeQuantity: number | string) {
        this.buyPrice = Number(buyPrice);
        this.sellPrice = Number(sellPrice);
        this.investPrice = Number(investPrice);
        this.maxTradeQuantity = Number(maxTradeQuantity);
    }
}
