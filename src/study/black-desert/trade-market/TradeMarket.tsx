import "../../css/cssPropertiesClass.scss";
import * as React from "react"
import "./TradeMarket.scss";
import UserTradeSettingContainer from "./form-components/user-trade-setting/UserTradeSettingContainer";
import BreakEvenPointContainer from "./form-components/break-even-point/BreakEvenPointContainer";
import DiffBenefitContainer from "./form-components/diff-benefit/DiffBenefitContainer";

export default function TradeMarket() {

    return (
        <div className="TradeMarket-wrap">
            <h1>검은사막 거래소 수익 계산기</h1>

            <h3>사용자 정보 설정</h3>
            <UserTradeSettingContainer className="mt-20"/>

            <h3>이익 계산 (기준 : 아이템 1개 가격)</h3>
            <div className="flex-wrap">
                <BreakEvenPointContainer/>
                <DiffBenefitContainer/>
            </div>
        </div>
    )
}
