import RouterQuery from "./RouterQuery";

export default class SqlRouterQuery extends RouterQuery {
    private static readonly VALID_ORDERBY_VALUE: Array<string> = ["asc", "desc"];
    private static readonly DEFAULT_ORDERBY_VALUE: string = "desc";
    private _orderby: string = SqlRouterQuery.DEFAULT_ORDERBY_VALUE;

    get orderby(): string {
        return this._orderby;
    }

    /**
     * 굳이 private number를 만들고 public한 setter를 선언한 이유는,
     * query에 유효하지않은 값이 저장되는것을 setter에서 방지하기위함입니다.
     * server에 유효하지않은 queryString전달하는것을 Client에서도 막으려고 했습니다.
     *
     * 예를들어, orderby라는 key에 유효한 값은, asc와 desc입니다. (기준 : oracle)
     * 그런데 domain/path?orderby=xxx라는 요청이 server로 가서는 안됩니다.
     */
    set orderby(value: string) {

        if (!SqlRouterQuery.VALID_ORDERBY_VALUE.includes(value)) {
            console.warn(`경고 : 유효하지않은 값을 set하려고 시도하여, 시도가 실패되었습니다. 
            set을 시도한값=${value}`);

        } else {
            this._orderby = value;
        }
    }
}
