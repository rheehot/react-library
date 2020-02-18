import HeaderInfo from "../../../layout/header/HeaderInfo";

export function hoverableHeaderList(firstHeaderName: string, routes: Array<any>): Array<HeaderInfo> {
    const firstHeader = new HeaderInfo(defaultLinkPath(routes[0]), firstHeaderName);
    const allHeaders = routes.map((route: any) => {

        const linkPath = defaultLinkPath(route);
        const nameInHeader = defaultHeaderName(route);

        return new HeaderInfo(linkPath, nameInHeader);
    });

    return [firstHeader].concat(allHeaders);
}

export function defaultHeaderName(route: any) {
    return (route.meta) ? (route.meta.name) ? route.meta.name : route.component.name : route.component.name;
}

export function defaultLinkPath(route: any) {
    return (route.meta) ? (route.meta.linkPath) ? route.meta.linkPath : route.path : route.path;
}
