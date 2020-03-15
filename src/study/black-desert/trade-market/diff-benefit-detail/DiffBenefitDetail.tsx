import * as React from "react"
import {ChangeEvent, MouseEvent, useState} from "react"
import {InputItem} from "../../../react/common/form/InputItem";
import MyButton from "../../../react/common/form/MyButton";
import {DiffBenefitProp} from "../form-components/diff-benefit/DiffBenefitContainer";
import UserTradeSettingContainer from "../form-components/user-trade-setting/UserTradeSettingContainer";
import {getDiffBenefitDetailInfo} from "../../system-setting/TradeSystem";
import DiffBenefitDetailParams from "../../system-setting/DiffBenefitDetailParams";

export default function DiffBenefitDetail(props: DiffBenefitProp) {

    const [buyPrice, setBuyPrice] = useState("");
    const [sellPrice, setSellPrice] = useState("");
    const [investPrice, setInvestPrice] = useState("");
    const [maxTradeQuantity, setMaxTradeQuantity] = useState("");

    const [commaInvestPrice, setCommaInvestPrice] = useState("");
    const [totalBenefit, setTotalBenefit] = useState("");
    const [minTradeCount, setMinTradeCount] = useState("");

    function setStateBuyPrice(event: ChangeEvent<HTMLInputElement>) {
        setBuyPrice(event.target.value);
    }
    function setStateSellPrice(event: ChangeEvent<HTMLInputElement>) {
        setSellPrice(event.target.value);
    }
    function setStateInvestPrice(event: ChangeEvent<HTMLInputElement>) {
        setInvestPrice(event.target.value);
    }
    function setStateMaxTradeQuantity(event: ChangeEvent<HTMLInputElement>) {
        setMaxTradeQuantity(event.target.value);
    }

    function diffBenefitDetailFormSubmit(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const params = new DiffBenefitDetailParams(buyPrice, sellPrice, investPrice, maxTradeQuantity);
        const info = getDiffBenefitDetailInfo(props.userInfo, params);

        setCommaInvestPrice(info.commaInvestPrice);
        setTotalBenefit(info.commaTotalBenefit);
        setMaxTradeQuantity(info.commaMaxTradeQuantity);

        if(info.maxTradeQuantity > 0) {
            setMinTradeCount(info.commaMinTradeCount);
        }
    }

    return (
        <div className="DiffBenefitDetail-wrap">

            <h1 className="mb-20">검은사막 차익계산 상세 분석</h1>

            <div className="vertical-align-top">
                <UserTradeSettingContainer className="display-inline-block mr-20 mb-20"/>
                <form className="trade-market-form display-inline-block">
                    <fieldset className="form-header">거래정보 입력</fieldset>
                    <InputItem labelText="총 투자 금액" onChangeHandler={setStateInvestPrice} inputValue={investPrice}/>
                    <InputItem labelText="거래 최대 수량" onChangeHandler={setStateMaxTradeQuantity} inputValue={maxTradeQuantity}/>
                    <InputItem labelText="*개당 구매 금액" onChangeHandler={setStateBuyPrice} inputValue={buyPrice}/>
                    <InputItem labelText="*개당 판매 금액" onChangeHandler={setStateSellPrice} inputValue={sellPrice}/>
                    <MyButton className="float-right" onClickHandler={diffBenefitDetailFormSubmit} disable={!(buyPrice && sellPrice)}>조회</MyButton>
                </form>
            </div>

            <h3 className="mt-20 mb-20">분석 결과</h3>

            <ul className="mb-30">
                <li>{`${commaInvestPrice}은화를 투자했을 때 얻을 수 있는 이익은 ${totalBenefit}은화 입니다.`}</li>
                <li>{`위의 수익을 내기 위해서는, ${maxTradeQuantity}개씩 총 ${minTradeCount}회를 구매해야 합니다.`}</li>
            </ul>
        </div>
    )
}
