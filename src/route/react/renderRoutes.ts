import PureComponentParent from "../../study/react/render/pure/PureComponentParent";
import PropReRenderParent from "../../study/react/render/prop-re-render/PropReRenderParent";
import ClassComponentParent from "../../study/react/render/function/ClassComponentParent";
import WhenPropUpdateParent from "../../study/react/render/when-prop-update/WhenPropUpdateParent";
import {UseMemoComponent} from "../../study/react/render/use-memo/UseMemoComponent";
import {UseEffectComponent} from "../../study/react/render/use-effect/UseEffectComponent";

const path = "/react/render";

export const renderRoutes = [
    {
        path: `${path}/pure`,
        component: PureComponentParent,
        exact: true
    },
    {
        path: `${path}/props-re-render-test`,
        component: PropReRenderParent,
        exact: true,
        meta: {
            name: "Props Re-render"
        }
    },
    {
        path: `${path}/functional`,
        component: ClassComponentParent,
        exact: true,
        meta: {
            name: "함수형 컴포넌트"
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
    }
];
