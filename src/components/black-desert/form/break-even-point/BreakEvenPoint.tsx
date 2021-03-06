import * as React from "react"
import {BreakEvenPointProp} from "./BreakEvenPointContainer";
import MyButton from "../../../form/MyButton";
import {InputItem} from "../../../form/InputItem";
import {MouseEvent, useEffect} from "react";
import {useState} from "react";
import {ChangeEvent} from "react";
import "../TradeMarketForm.scss";
import {getBreakEvenPrice} from "../../../../utils/black-desert/TradeSystem";

export default function BreakEvenPoint(props: BreakEvenPointProp) {

    const [currentPrice, setCurrentPrice] = useState("");
    const [breakEvenPoint, setBreakEvenPoint] = useState(0);

    const setStateCurrentPrice = (event: ChangeEvent<HTMLInputElement>) => {

        setCurrentPrice(event.target.value);
    };

    const setStateBreakEvenPoint = () => {
        setBreakEvenPoint(getBreakEvenPrice(props.userInfo, currentPrice));
    };

    const breakEvenPointFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        setStateBreakEvenPoint();
    };

    const breakEvenPointInfo = () => {
        alert(`${currentPrice}은화에 구매를 하면, 나중에 수수료를 따져봤을 때 ${breakEvenPoint}은화 이상 올라갈 때 되팔아야 수익이 생깁니다.`);
    };

    useEffect(() => {

        setStateBreakEvenPoint();

    }, [props.userInfo]);

    return (
        <form className="mt-20 mr-20 flex-direction-column trade-market-form">
            <div className="form-header">
                <fieldset>손익분기점 계산</fieldset>
                <MyButton type="button" className={breakEvenPoint === 0 ? "display-none" : ""} onClickHandler={breakEvenPointInfo}>Info</MyButton>
            </div>
            <InputItem type="number" labelText="현재 가격" onChangeHandler={setStateCurrentPrice} inputValue={currentPrice}/>
            <div className="form-footer">
                <span>결과 : <span className="result">{breakEvenPoint}</span></span>
                <MyButton onClickHandler={breakEvenPointFormSubmit}>조회</MyButton>
            </div>
        </form>
    )
}
