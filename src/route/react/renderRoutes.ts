import PureComponentParent from "../../study/react/render/pure/PureComponentParent";
import PropReRenderParent from "../../study/react/render/prop-re-render/PropReRenderParent";
import ClassComponentParent from "../../study/react/render/function/ClassComponentParent";
import WhenPropUpdateParent from "../../study/react/render/when-prop-update/WhenPropUpdateParent";
import {UseMemoComponent} from "../../study/react/render/use-memo/UseMemoComponent";
import {UseEffectComponent} from "../../study/react/render/use-effect/UseEffectComponent";
import MultiSetStateParent from "../../study/react/render/multi-set-state/MultiSetStateParent";
import StatePropReferenceParent from "../../study/react/render/state-prop-reference/StatePropReferenceParent";

const path = "/react/render";

export const renderRoutes = [
    {
        path: `${path}/pure`,
        component: PureComponentParent,
        exact: true,
        meta: {
            hoverable: false
        }
    },
    {
        path: `${path}/props-re-render-test`,
        component: PropReRenderParent,
        exact: true,
        meta: {
            name: "Props Re-render",
            hoverable: false
        }
    },
    {
        path: `${path}/functional`,
        component: ClassComponentParent,
        exact: true,
        meta: {
            name: "함수형 컴포넌트",
            hoverable: false
        }
    },
    {
        path: `${path}/when-prop-update`,
        component: WhenPropUpdateParent,
        exact: true,
        meta: {
            name: "prop업데이트 시점"
        }
    },
    {
        path: `${path}/memo-test`,
        component: UseMemoComponent,
        exact: true
    },
    {
        path: `${path}/effect-test`,
        component: UseEffectComponent,
        exact: true
    },
    {
        path: `${path}/multi-set-state`,
        component: MultiSetStateParent,
        exact: true
    },
    {
        path: `${path}/state-prop-reference`,
        component: StatePropReferenceParent,
        exact: true
    }
];
