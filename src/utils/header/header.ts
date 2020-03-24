import HeaderInfo from "../../layout/header/HeaderInfo";

export function hoverableHeaderList(firstHeaderName: string, routes: Array<any>): Array<HeaderInfo> {
    const firstHeader = new HeaderInfo((routes[0].path), firstHeaderName);
    const allHeaders = routes.filter(route => route.meta === undefined || route.meta.hoverable !== false).map((route: any) => {

        const nameInHeader = defaultHeaderName(route);

        return new HeaderInfo(route.path, nameInHeader);
    });

    return [firstHeader].concat(allHeaders);
}

export function defaultHeaderName(route: any) {
    return (route.meta) ? (route.meta.name) ? route.meta.name : route.component.name : route.component.name;
}
