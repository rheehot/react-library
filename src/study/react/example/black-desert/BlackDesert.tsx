import * as React from "react"
import {InputItem} from "../../common/form/InputItem";
import {ChangeEvent, useState} from "react";
import MyButton from "../../common/form/MyButton";
import RadioGroup from "../../common/form/RadioGroup";
import "./BlackDesert.scss";

interface AppProp {

}

export default function BlackDesert(props: AppProp) {

    const [currentPrice, setCurrentPrice] = useState();
    const [breakEvenPoint, setBreakEvenPoint] = useState();
    const [heraldryFame, setHeraldryFame] = useState(0);
    const [haveValuePackage, setHaveValuePackage] = useState(true);

    function setStateHaveValuePackage(event: ChangeEvent<HTMLInputElement>) {

        console.log(event.target.checked);
        setHaveValuePackage(event.target.checked);
    }

    const test = [
        {
            value: 7000,
            label: 7000
        },
        {
            value: 5000,
            label: 5000
        },
        {
            value: 3000,
            label: 3000
        }
    ];

    function setStateHeraldryFame(checkValue: number) {
        setHeraldryFame(checkValue);
    }

    function setStateCurrentPrice(event: ChangeEvent<HTMLInputElement>) {
        setCurrentPrice(event.target.value);
    }

    return (
        <div className="BlackDesert-wrap">
            <h1>검은사막 계산기</h1>

            <h3>사용자 정보 설정</h3>
            <form>
                <fieldset>가문명성 선택</fieldset>
                <RadioGroup selectValue={heraldryFame} valueAndLabelArray={test} radioGroupName="HeraldryFame" selectHandler={setStateHeraldryFame}/>

                <input type="checkbox" onChange={setStateHaveValuePackage} checked={haveValuePackage}/>
                <label>밸류패키지 여부</label>
            </form>

            <h3>이익계산 (기준 : 1개)</h3>
            <form>
                <fieldset>손익분기점 계산</fieldset>
                <InputItem labelText="현재 가격" onChangeHandler={setStateCurrentPrice} inputValue={currentPrice}></InputItem>
                <MyButton onClickHandler={() => {}}>조회</MyButton>
                <span className="result">+2000 asdasdasd</span>
            </form>
            <form>
                <fieldset>차액 계산</fieldset>
                <InputItem labelText="현재 가격" onChangeHandler={setStateCurrentPrice} inputValue={currentPrice}></InputItem>
                <InputItem labelText="현재 가격" onChangeHandler={setStateCurrentPrice} inputValue={currentPrice}></InputItem>
                <MyButton onClickHandler={() => {}}>조회</MyButton>
                <span className="result">+2000 asdasdasd</span>
            </form>
        </div>
    )
}
