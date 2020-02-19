import PureComponentParent from "../../study/react/render/pure/PureComponentParent";
import NotPureComponentParent from "../../study/react/render/not-pure/NotPureComponentParent";

export const renderRoutes = [
    {
        path: "/react/render/pure",
        component: PureComponentParent,
        exact: true
    },
    {
        path: "/react/render/not-pure",
        component: NotPureComponentParent,
        exact: true
    }
];
