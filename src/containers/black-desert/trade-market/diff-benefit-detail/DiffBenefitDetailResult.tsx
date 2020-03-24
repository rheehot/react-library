import * as React from "react"
import {memo} from "react";

interface AppProp {
    investPrice: string,
    totalBenefit: string,
    maxTradeQuantity: string,
    minTradeCount: string
}

export default memo(function DiffBenefitDetailResult(props: AppProp) {

    const minTradeCountLi = props.minTradeCount !== "0" ?
        <li>{`위의 수익을 내기 위해서는 ${props.maxTradeQuantity}개씩 약 ${props.minTradeCount}회를 구매해야 합니다.`}</li> : null;


    if (props.investPrice !== "0" && props.totalBenefit !== "0") {

        console.log("child render");

        return (
            <div className="DiffBenefitDetailResult-wrap">
                <h3 className="mt-20 mb-20">분석 결과</h3>

                <ul className="mb-30">
                    <li>{`${props.investPrice}은화를 투자했을 때 얻을 수 있는 이익은 약 ${props.totalBenefit}은화 입니다.`}</li>
                    {minTradeCountLi}
                </ul>
            </div>
        );

    } else {
        return null;
    }

})
