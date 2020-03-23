import PureComponentParent from "../../study/react/render/class/pure/PureComponentParent";
import PropReRenderParent from "../../study/react/render/class/prop-re-render/PropReRenderParent";
import ClassComponentParent from "../../study/react/render/hooks/function/ClassComponentParent";
import WhenPropUpdateParent from "../../study/react/render/class/when-prop-update/WhenPropUpdateParent";
import {UseMemoComponent} from "../../study/react/render/hooks/use-memo/UseMemoComponent";
import {UseEffectComponent} from "../../study/react/render/hooks/use-effect/UseEffectComponent";
import MultiSetStateParent from "../../study/react/render/class/multi-set-state/MultiSetStateParent";
import StatePropReferenceParent from "../../study/react/render/class/state-prop-reference/StatePropReferenceParent";
import ReactMemoParent from "../../study/react/render/hooks/react-memo/ReactMemoParent";
import HooksSecondParam from "../../study/react/render/hooks/hooks-second-param/HooksSecondParam";
import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import UseRefParent from "../../study/react/render/hooks/use-ref/UseRefParent";
import UsePrevPropParent from "../../study/react/render/hooks/use-prev/UsePrevPropParent";
import LiteralParent from "../../study/react/render/common/literal/LiteralParent";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/render`;

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
    },
    {
        path: `${path}/react-memo`,
        component: ReactMemoParent,
        exact: true
    },
    {
        path: `${path}/hooks-second-param`,
        component: HooksSecondParam,
        exact: true
    },
    {
        path: `${path}/use-ref`,
        component: UseRefParent,
        exact: true
    },
    {
        path: `${path}/use-prev`,
        component: UsePrevPropParent,
        exact: true
    },
    {
        path: `${path}/literal`,
        component: LiteralParent,
        exact: true
    }
];
