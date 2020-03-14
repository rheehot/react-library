import * as React from "react"
import {InputItem} from "../../../react/common/form/InputItem";
import MyButton from "../../../react/common/form/MyButton";
import {DiffBenefitProp} from "../form-components/diff-benefit/DiffBenefitContainer";
import UserTradeSettingContainer from "../form-components/user-trade-setting/UserTradeSettingContainer";

export default function DiffBenefitDetail(props: DiffBenefitProp) {

    return (
        <div className="DiffBenefitDetail-wrap">

            <h1 className="mb-20">검은사막 차익계산 상세 분석</h1>

            <div>
                <UserTradeSettingContainer className="mr-20 mb-20 display-inline-block"/>

                <form className="trade-market-form display-inline-block">
                    <fieldset className="form-header">거래정보 입력</fieldset>
                    <InputItem labelText="투자 금액" onChangeHandler={() => {}} inputValue={123}/>
                    <InputItem labelText="최대 수량" onChangeHandler={() => {}} inputValue={123}/>
                    <InputItem labelText="개당 무게" onChangeHandler={() => {}} inputValue={123}/>
                    <InputItem labelText="구매 금액" onChangeHandler={() => {}} inputValue={123}/>
                    <InputItem labelText="판매 금액" onChangeHandler={() => {}} inputValue={123}/>
                    <MyButton onClickHandler={()=>{}}>조회</MyButton>
                </form>
            </div>

            <h3 className="mt-20 mb-20">분석 결과</h3>

            <ul>
                <li>구매 금액, 판매 금액은 반드시 입력해야함.</li>
                <li>1. n억을 투자했을 때 얼마의 수익가능. (투자금액 안적으면 1억으로 하기)</li>
                <li>2. if(최대수량 입력했을 때) 총 n번의 거래소를 들락날락 해야함. 한번에 최대 n개씩 물건을 산다고 했을 때, 총 m개의 물건을 사야함.</li>
                <li>3. if(기대 무게 입력했을 때) 총 x VT의 거래소창고 무게를 차지함.</li>
            </ul>
        </div>
    )
}
