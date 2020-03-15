import * as React from "react"
import DiffBenefitDetailInfo from "../../system-setting/DiffBenefitDetailInfo";

interface AppProp {
    result: DiffBenefitDetailInfo
}

export default function DiffBenefitDetailResult({result}: AppProp) {

    const minTradeCountLi = result?.minTradeCount > 0 ?
        <li>{`위의 수익을 내기 위해서는 ${result.commaMaxTradeQuantity}개씩 총 ${result.commaMinTradeCount}회를 구매해야 합니다.`}</li> : null;

    if(result) {

        console.log("render");

        return (
            <div className="DiffBenefitDetailResult-wrap">
                <h3 className="mt-20 mb-20">분석 결과</h3>

                <ul className="mb-30">
                    <li>{`${result.commaInvestPrice}은화를 투자했을 때 얻을 수 있는 이익은 ${result.commaTotalBenefit}은화 입니다.`}</li>
                    {minTradeCountLi}
                </ul>
            </div>
        );

    } else {
        return null;
    }
}
