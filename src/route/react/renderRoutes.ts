import PureComponentParent from "../../study/react/render/pure/PureComponentParent";
import PropReRenderChild from "../../study/react/render/prop-render-test/PropReRenderChild";

export const renderRoutes = [
    {
        path: "/react/render/pure",
        component: PureComponentParent,
        exact: true
    },
    {
        path: "/react/render/props-re-render-test",
        component: PropReRenderChild,
        exact: true,
        meta: {
            name: "Props Re-render"
        }
    }
];
