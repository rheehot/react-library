import { COMMON_QUERY} from "./DefaultQuery";

export function withoutEmptyString(value: string): boolean {

    return value === "";
}

export function withoutNumberZero(value: string | number): boolean {

    return value === 0;
}

export function withoutStringZero(value: string | number): boolean {

    return value === "0";
}

export function withoutAllZero(value: string | number): boolean {

    return value === "0" || value === 0;
}


export function propertyDelete(object: object, ...deleteModes: Array<Function>): object {

    let clone = {...object};

    Object.keys(clone).forEach( property => {

        // @ts-ignore
        let value = clone[property];

        let needDelete = deleteModes.some( deleteMode => deleteMode(value) );

        if(needDelete) {

            // @ts-ignore
            delete clone[property];
        }
    });

    return clone;
}

export function combineWithDelete(baseObject: object, addObject: object, ...withoutModes: Array<Function>): object {

    let combineObject = Object.assign({...baseObject}, addObject);
    return propertyDelete(combineObject, ...withoutModes);
}

export const DEFAULT_ROUTE = (function () {

    let _defaultRoute = {
        LOGIN: {path: "/login"},
        DASHBOARD: {path: "dashboard"},
        NEWS_LIST: {path: "news", query: COMMON_QUERY},
        BANNER_LIST: {path: "advertise/banner", query: Object.assign({...COMMON_QUERY}, {per: 8})},
    };

    Object.freeze(_defaultRoute);

    return _defaultRoute;
}());
