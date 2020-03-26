import * as React from "react"
import {ChangeEvent, MouseEvent, useEffect, useState} from "react"
import {InputItem} from "../../../../components/form/InputItem";
import MyButton from "../../../../components/form/MyButton";
import {DiffBenefitProp} from "../../../../components/black-desert/form/diff-benefit/DiffBenefitContainer";
import UserTradeSettingContainer from "../../../../components/black-desert/form/user-trade-setting/UserTradeSettingContainer";
import {getDiffBenefitDetailInfo} from "../../../../utils/black-desert/TradeSystem";
import DiffBenefitDetailParams from "../../../../classes/black-desert/DiffBenefitDetailParams";
import DiffBenefitDetailResult from "./DiffBenefitDetailResult";
import DiffBenefitDetailInfo from "../../../../classes/black-desert/DiffBenefitDetailInfo";

export default function DiffBenefitDetail(props: DiffBenefitProp) {

    const [buyPrice, setBuyPrice] = useState("");
    const [sellPrice, setSellPrice] = useState("");
    const [investPrice, setInvestPrice] = useState("");
    const [maxTradeQuantity, setMaxTradeQuantity] = useState("");

    const [info, setInfo] = useState(new DiffBenefitDetailInfo());

    const setStateBuyPrice = (event: ChangeEvent<HTMLInputElement>) => {
        setBuyPrice(event.target.value);
    };
    const setStateSellPrice = (event: ChangeEvent<HTMLInputElement>) => {
        setSellPrice(event.target.value);
    };
    const setStateInvestPrice = (event: ChangeEvent<HTMLInputElement>) => {
        setInvestPrice(event.target.value);
    };
    const setStateMaxTradeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxTradeQuantity(event.target.value);
    };

    const resultInfo = () => {

        const params = new DiffBenefitDetailParams(buyPrice, sellPrice, investPrice, maxTradeQuantity);
        const info = getDiffBenefitDetailInfo(props.userInfo, params);
        setInfo(info);
    };

    const diffBenefitDetailFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        resultInfo();
    };

    useEffect(() => ( resultInfo() ), [props.userInfo]);

    return (
        <div className="DiffBenefitDetail-wrap">

            <h1 className="mb-20">검은사막 차익계산 상세 분석</h1>

            <div className="vertical-align-top">
                <UserTradeSettingContainer className="display-inline-block mr-20 mb-20"/>
                <form className="trade-market-form display-inline-block">
                    <fieldset className="form-header">거래정보 입력</fieldset>
                    <InputItem type="number" labelText="총 투자 금액" onChangeHandler={setStateInvestPrice} inputValue={investPrice}/>
                    <InputItem type="number" labelText="거래 최대 수량" onChangeHandler={setStateMaxTradeQuantity} inputValue={maxTradeQuantity}/>
                    <InputItem type="number" labelText="*개당 구매 금액" onChangeHandler={setStateBuyPrice} inputValue={buyPrice}/>
                    <InputItem type="number" labelText="*개당 판매 금액" onChangeHandler={setStateSellPrice} inputValue={sellPrice}/>
                    <MyButton className="float-right" onClickHandler={diffBenefitDetailFormSubmit} disable={!(buyPrice && sellPrice)}>조회</MyButton>
                </form>
                <DiffBenefitDetailResult investPrice={info.commaInvestPrice} maxTradeQuantity={info.commaMaxTradeQuantity}
                                         minTradeCount={info.commaMinTradeCount} totalBenefit={info.commaTotalBenefit}/>
            </div>
        </div>
    )
}
