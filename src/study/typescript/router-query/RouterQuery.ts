export default class RouterQuery {

    /**
     * VueRouter에서, Router에 query를 전달할 때,
     * 객체의 property name가 직접 전달되는 문제가 있었습니다.
     * private property를 선언하고 public getter setter를 선언하더라도,
     * 실제로 요청되는 url은 doamin/path?_key1=1 이렇게 _가 그대로 붙습니다.
     * 그러므로 그것을 제거하기 위함입니다.
     *
     * Class의 private Property를 전달하려는 이유는, SqlRouterQuery.ts를 참고해주세요.
     */
    private _removePrivatePreffix() {

        let props: Array<string> = Object.keys(this);
        let removedPreffixObject = {};

        props.forEach((prop: string) => {

            /**
             * 기존의 RouterQuery 객체에 있었던 private 프로퍼티
             */
            if (prop.charAt(0) === "_") {
                // @ts-ignore
                removedPreffixObject[prop.slice(1)] = this[prop];


            } else {
                /**
                 * add()로 추가한 객체에 있었던 프로퍼티
                 * or
                 * 유효성검증이 필요없는 RouterQuery객체에 있는 public 프로퍼티
                 */

                // @ts-ignore
                removedPreffixObject[prop] = this[prop];
            }
        });

        return removedPreffixObject;
    }

    /**
     * VueRouter에서, Router에 query를 전달했을 때,
     * queryString에서 value 비어있을 경우 해당 값을 제거하지않으면
     * domain/path?key1=&key2 이런식으로 요청이 Server로 가게됩니다.
     * 이것을 방지하기위해서 비어있는 property를 제거한 값을 반환하고 있습니다.
     *
     * 굳이 Router에 전달하려는 query객체를 이렇게 반한하는 방식으로 만드는 이유는,
     * query객체 하나를 미리 만들고 그 객체값을 바꿀경우 import한 다른곳에서 의도하지않은 작동이 발생하기 떄문입니다.
     */
    toRouterQuery(): object {

        let props: Array<string> = Object.keys(this._removePrivatePreffix());
        let routerQuery = {};

        props.forEach((prop: string) => {

            // @ts-ignore
            let value = this[prop];

            if (value !== undefined && value !== "" && value !== null) {
                // @ts-ignore
                routerQuery[prop] = value;
            }
        });

        return routerQuery;
    }

    /**
     * 이제 CRUD관련 메소드는 remove()만 추가하면 됨.
     * 그런데 어쩌지? add()로 추가할 때 setter getter는 추가되지않고
     * property name도 _붙은건 기존, _안붙은건 add한거라서,
     *
     * remove(propertyName)했을 때 이걸 호출한 사람이
     * private property를 삭제하려고하는건지
     * add했던 public property를 삭재하려고 하는건지,
     * 아니면 애초에 public property로 선언했던 property를 삭제하려고 하는건지 판단할수가없음.
     *
     * 그래서 add() 자체를 고쳐야하는데 현재 고민임.
     *
     * 방법1. add()한 애들을 모두 _붙여서 넣는것.
     * 근데 그러려면 getter를 없애야함.
     *
     * 누구나 add({prop: value}); 하면 obj.prop으로 접근할려고 생각하지
     * obj._prop으로 접근하려고 생각하지는 않을것임.
     * 그런데 나중에 getter()가 필요하면? --> 망함.
     *
     *
     * 방법2. add()자체를 없애고, 무조건 클래스에서 미리 프로퍼티를 선언하는 방식으로 가기.
     * 애초에 모든 프로퍼티를 죄다 선언해놓은 클래스 하나에서 이값 저값만 살짝 살짝 바꾸고
     * 안쓰는 프로퍼티 열몇개 그냥 toRouterQuery에서 다 걸러지면 훨씬나을거같음.
     *
     * 이렇게하면 remove()도 구현할 수 있음.
     * remove(propertyname)에서 return delete this[`_${propertyName}`];하면 되니까.
     *
     * remove를 구현하지않으면 remove()를 현재 할수가없음.
     * set ""하면 setter 유효성검증에서 걸리는값이 존재할 수도 있음.
     * set 0하면 setter 유효성검증에서 걸리는값이 존재할 수도 있음. (page번호)
     */
    add(obj: object): RouterQuery {

        return <RouterQuery>Object.assign(this, obj);
    }

    /**
     * update()는 필요없음. 그냥 routerQuery.propertyName = updateValue 해서 setter호출시키면됨.
     */
}
