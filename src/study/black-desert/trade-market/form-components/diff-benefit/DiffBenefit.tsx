import * as React from "react"
import {Link} from "react-router-dom";
import {InputItem} from "../../../../react/common/form/InputItem";
import MyButton from "../../../../react/common/form/MyButton";
import {DiffBenefitProp} from "./DiffBenefitContainer";
import {useState} from "react";
import {ChangeEvent} from "react";
import {getSettlementPrice} from "../../../system-setting/TradeSystem";
import {MouseEvent} from "react";
import {useEffect} from "react";
import "../TradeMarketForm.scss";

export default function DiffBenefit(props: DiffBenefitProp) {

    const [buyPrice, setBuyPrice] = useState("");
    const [sellPrice, setSellPrice] = useState("");
    const [diffBenefit, setDiffBenefit] = useState(0);

    function setStateBuyPrice(event: ChangeEvent<HTMLInputElement>) {
        setBuyPrice(event.target.value);
    }

    function setStateSellPrice(event: ChangeEvent<HTMLInputElement>) {
        setSellPrice(event.target.value);
    }

    function setStateDiffBenefit() {
        const sellPriceWithoutTax = getSettlementPrice(props.userInfo, sellPrice);
        const _buyPrice = Number(buyPrice);
        setDiffBenefit(sellPriceWithoutTax - _buyPrice);
    }

    function diffBenefitFormSubmit(event: MouseEvent<HTMLButtonElement>) {

        event.preventDefault();
        setStateDiffBenefit();
    }

    useEffect(() => {

        setStateDiffBenefit();

    },[props.userInfo]);

    return (
        <form className="mt-20 trade-market-form">
            <div className="form-header">
                <fieldset>차익 계산</fieldset>
                <Link className="more-view" to="/black-desert/trade-market/diff-benefit-detail">더보기</Link>
            </div>
            <InputItem type="number" labelText="개당 구매 가격" onChangeHandler={setStateBuyPrice} inputValue={buyPrice}/>
            <InputItem type="number" labelText="개당 판매 가격" onChangeHandler={setStateSellPrice} inputValue={sellPrice}/>
            <div className="form-footer">
                <span>결과 : <span className="result">{diffBenefit}</span></span>
                <MyButton onClickHandler={diffBenefitFormSubmit}>조회</MyButton>
            </div>
        </form>
    )
}
