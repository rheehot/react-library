import PureComponentParent from "../../study/react/render/pure/PureComponentParent";
import PropReRenderParent from "../../study/react/render/prop-render-test/PropReRenderParent";
import PropReRenderBugParent from "../../study/react/render/not-pure/PropReRenderBugParent";

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
    },
    {
        path: "/react/render/props-re-render-bug",
        component: PropReRenderBugParent,
        exact: true,
        meta: {
            name: "Props Re-render Bug"
        }
    }
];
