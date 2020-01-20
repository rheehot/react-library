export const COMMON_QUERY = (function () {

    let _query = {
        page: 1,
        per: 10,
        direction: "desc",
        orderby: "created"
    };

    Object.freeze(_query);
    return _query;
}());
