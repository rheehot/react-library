import PropReRenderParent from "../../containers/react/render/class/prop-re-render/PropReRenderParent";
import WhenPropUpdateParent from "../../containers/react/render/class/when-prop-update/WhenPropUpdateParent";
import {UseMemoComponent} from "../../containers/react/render/hooks/use-memo/UseMemoComponent";
import HooksSecondParam from "../../containers/react/render/hooks/hooks-second-param/HooksSecondParam";
import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import UseRefParent from "../../containers/react/render/hooks/use-ref/UseRefParent";
import UsePrevPropParent from "../../containers/react/render/hooks/use-prev/UsePrevPropParent";
import LiteralParent from "../../containers/react/render/common/literal/LiteralParent";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/render`;

export const renderRoutes = [
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
