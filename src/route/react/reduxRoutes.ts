import PaletteContainer from "../../study/react/palette/PaletteContainer";

const path = "/react/redux";

export const reduxRoutes = [
    {
        path: `${path}/palette`,
        component: PaletteContainer,
        exact: true,
        meta: {
            name: "Palette"
        }
    }
];
