import * as React from "react"
import {ChangeEvent, useRef} from "react"
import RadioGroup from "../../../form/RadioGroup";
import UserInfo from "../../../../classes/black-desert/UserInfo";
import {UserTradeSettingProp} from "./UserTradeSettingContainer";
import "../TradeMarketForm.scss";
import {
    getHeraldryFameStepAmount,
    HERALDRY_FAME_ARRAY
} from "../../../../utils/black-desert/TradeSystem";

export default function UserTradeSetting(props: UserTradeSettingProp) {

    const heraldryFameArray = useRef((function() {

        const withoutLast = HERALDRY_FAME_ARRAY.slice(0, HERALDRY_FAME_ARRAY.length - 1);
        const last = HERALDRY_FAME_ARRAY[HERALDRY_FAME_ARRAY.length - 1];

        return withoutLast.map((heraldryFame, index) => {
            return {
                value: heraldryFame.amount,
                label: `${heraldryFame.amount}점 이상 ${HERALDRY_FAME_ARRAY[index + 1].amount}점 미만`
            }
        }).concat({value: last.amount, label: `${last.amount}점 이상`});
    }()));

    const setStateHaveValuePackage = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeUserInfo(Object.assign<{}, UserInfo, { haveValuePackage: boolean }>({}, props.userInfo, {haveValuePackage: event.target.checked}));
    };

    const setStateHeraldryFame = (checkValue: string) => {
        props.changeUserInfo(Object.assign<{}, UserInfo, { heraldryFame: number }>({}, props.userInfo, {heraldryFame: Number(checkValue)}));
    };

    return (
        <form className={`trade-market-form ${props.className ? props.className : ""}`}>
            <div className="form-header">
                <fieldset>가문명성 선택</fieldset>
            </div>
            <RadioGroup selectValue={getHeraldryFameStepAmount(props.userInfo.heraldryFame)} valueAndLabelArray={heraldryFameArray.current} radioGroupName="HeraldryFame" selectHandler={setStateHeraldryFame}/>

            <input type="checkbox" onChange={setStateHaveValuePackage} checked={props.userInfo.haveValuePackage}/>
            <label>밸류패키지 여부</label>
        </form>
    )
}
