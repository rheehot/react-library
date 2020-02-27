export enum Color {
    RED = "red",
    BLUE= "blue"
}

export enum Action {
    CHANGE_COLOR = `counter/CHANGE_COLOR`,
    INCREMENT = `counter/INCREMENT`,
    DECREMENT = `counter/DECREMENT`,
}

export const changeColor = (color: string) => ({type: Action.CHANGE_COLOR, color});
export const increment = () => ({type: Action.INCREMENT});
export const decrement = () => ({type: Action.DECREMENT});

export interface CounterState {
    color: Color,
    number: number
}

const initialState:CounterState = {
    color: Color.BLUE,
    number: 0
};

export default function counter(state = initialState, action: {type: Action, color: Color, number: number}) {

    /**
     * 흠 이건 쫌 별로네~ Vue는 메소드이름 잘 찾아갔는데 React Redux는 이렇게 일일히 세상에 어떻게 switch를 쓸수가있지 에이설마 잘나가는 리액트가 에이..
     */
    switch (action.type) {
        case Action.CHANGE_COLOR:
            return {...state, color: action.color};

        case Action.INCREMENT:
            return {...state, number: state.number + 1};

        case Action.DECREMENT:
            return {...state, number: state.number - 1};

        default:
            return state;
    }
}
