export enum CounterAction {
    INCREMENT = `counter/INCREMENT`,
    DECREMENT = `counter/DECREMENT`,
}

const initialState = {
    number: 0
};

/**
 * 아... reducer는 정확하게, state를 변환시키는게 아니고,
 * 변환된 state를 반환하는 함수구나. state를 반환하는 함수였어.
 * store에서 각각의 state를 가져오는곳이 바로 여기였어.
 */
export default function counter(state = initialState, action: {type: CounterAction, number: number}) {

    console.log(state);

    /**
     * 흠 이건 쫌 별로네~ Vue는 메소드이름 잘 찾아갔는데 React Redux는 이렇게 일일히 세상에 어떻게 switch를 쓸수가있지 에이설마 잘나가는 리액트가 에이..
     */
    switch (action.type) {

        case CounterAction.INCREMENT:
            return {...state, number: state.number + 1};

        case CounterAction.DECREMENT:
            return {...state, number: state.number - 1};

        default:
            return state;
    }
}
