import PureComponentParent from "../../study/react/render/pure/PureComponentParent";
import PropReRenderParent from "../../study/react/render/prop-re-render/PropReRenderParent";

export const renderRoutes = [
    {
        path: "/react/render/pure",
        component: PureComponentParent,
        exact: true
    },
    {
        path: "/react/render/props-re-render-test",
        component: PropReRenderParent,
        exact: true,
        meta: {
            name: "Props Re-render"
        }
    }
];
