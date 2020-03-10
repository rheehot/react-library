import "../../../css/cssPropertiesClass.scss";
import * as React from "react"
import {ChangeEvent, MouseEvent, useEffect, useMemo, useState} from "react"
import {InputItem} from "../../common/form/InputItem";
import MyButton from "../../common/form/MyButton";
import RadioGroup from "../../common/form/RadioGroup";
import "./BlackDesert.scss";
import {
    getBreakEvenPrice,
    getHeraldryFameStepAmount, getSettlementPrice,
    HERALDRY_FAME_ARRAY,
} from "./BlackDesertSystem";
import {BlackDesertInterface} from "./BlackDesertContainer";

export default function BlackDesert(props: BlackDesertInterface) {

    const [currentPrice, setCurrentPrice] = useState(0);
    const [breakEvenPoint, setBreakEvenPoint] = useState();
    const heraldryFameArray = useMemo(() => {

        const withoutLast = HERALDRY_FAME_ARRAY.slice(0, HERALDRY_FAME_ARRAY.length - 1);
        const last = HERALDRY_FAME_ARRAY[HERALDRY_FAME_ARRAY.length - 1];

        return withoutLast.map((heraldryFame, index) => {
            return {
                value: heraldryFame.amount,
                label: `${heraldryFame.amount}점 이상 ${HERALDRY_FAME_ARRAY[index + 1].amount}점 미만`
            }
        }).concat({value: last.amount, label: `${last.amount}점 이상`});

    }, []);

    const [buyPrice, setBuyPrice] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);
    const [diffBenefit, setDiffBenefit] = useState();

    function setStateBuyPrice(event: ChangeEvent<HTMLInputElement>) {
        setBuyPrice(Number(event.target.value));
    }

    function setStateSellPrice(event: ChangeEvent<HTMLInputElement>) {
        setSellPrice(Number(event.target.value));
    }

    function setStateHaveValuePackage(event: ChangeEvent<HTMLInputElement>) {
        props.changeUserInfo(Object.assign({}, props.userInfo, {haveValuePackage: event.target.checked}));
    }

    function setStateHeraldryFame(checkValue: number) {

        console.log(checkValue);
        console.log(typeof checkValue);
        debugger;

        props.changeUserInfo(Object.assign({}, props.userInfo, {heraldryFame: checkValue}));
    }

    function setStateCurrentPrice(event: ChangeEvent<HTMLInputElement>) {

        setCurrentPrice(Number(event.target.value));
    }

    function breakEvenPointFormSubmit(event: MouseEvent<HTMLButtonElement>) {

        event.preventDefault();
        setBreakEvenPoint(getBreakEvenPrice(props.userInfo, currentPrice).toFixed(0));
    }

    function diffBenefitFormSubmit(event: MouseEvent<HTMLButtonElement>) {

        event.preventDefault();
        const sellPriceWithoutTax = getSettlementPrice(props.userInfo, sellPrice);
        const diffBenefit = sellPriceWithoutTax - buyPrice;
        setDiffBenefit(diffBenefit ? diffBenefit.toFixed(0) : "");
    }

    useEffect(() => {

        //현재 이 코드가 submit할때 중복되고있음.
        const breakEventPoint = Number(getBreakEvenPrice(props.userInfo, currentPrice)?.toFixed(0));
        setBreakEvenPoint((Number.isNaN(breakEventPoint)) ? "" : breakEventPoint);

        //현재 이 코드가 submit할때 중복되고있음.
        const sellPriceWithoutTax = getSettlementPrice(props.userInfo, sellPrice);
        const diffBenefit = sellPriceWithoutTax - buyPrice;
        setDiffBenefit(diffBenefit ? diffBenefit.toFixed(0) : "");

    },[props.userInfo]);

    return (
        <div className="BlackDesert-wrap">
            <h1>검은사막 거래소 수익 계산기</h1>

            <h3>사용자 정보 설정</h3>
            <form className="mt-20">
                <fieldset>가문명성 선택</fieldset>
                <RadioGroup selectValue={getHeraldryFameStepAmount(props.userInfo.heraldryFame)} valueAndLabelArray={heraldryFameArray} radioGroupName="HeraldryFame" selectHandler={setStateHeraldryFame}/>

                <input type="checkbox" onChange={setStateHaveValuePackage} checked={props.userInfo.haveValuePackage}/>
                <label>밸류패키지 여부</label>
            </form>

            <h3>이익계산 (기준 : 아이템 1개 가격)</h3>
            <div className="flex-wrap">
                <form className="mt-20 mr-20 flex-direction-column">
                    <fieldset>손익분기점 계산</fieldset>
                    <InputItem labelText="현재 가격" onChangeHandler={setStateCurrentPrice} inputValue={currentPrice}/>
                    <div className="form-footer">
                        <span>결과 : <span className="result">{breakEvenPoint}</span></span>
                        <MyButton onClickHandler={breakEvenPointFormSubmit}>조회</MyButton>
                    </div>
                </form>
                <form className="mt-20">
                    <fieldset>차익 계산</fieldset>
                    <InputItem labelText="구매 가격" onChangeHandler={setStateBuyPrice} inputValue={buyPrice}/>
                    <InputItem labelText="판매 가격" onChangeHandler={setStateSellPrice} inputValue={sellPrice}/>
                    <div className="form-footer">
                        <span>결과 : <span className="result">{diffBenefit}</span></span>
                        <MyButton onClickHandler={diffBenefitFormSubmit}>조회</MyButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
