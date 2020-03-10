import BlackDesertUserInfo from "../../study/react/example/black-desert/BlackDesertUserInfo";

export enum BlackDesertAction {
    CHANGE_USER_INFO = "black-desert/CHANGE_USER_INFO",
}

export interface BlackDesertState {
    userInfo: BlackDesertUserInfo;
}

const initialState: BlackDesertState = {
    userInfo: new BlackDesertUserInfo(5700, true)
};

export default function blackDesertReducer(state: BlackDesertState = initialState, action: { type: BlackDesertAction, payload: BlackDesertUserInfo }): BlackDesertState {

    state.userInfo.heraldryFame = "123";
    Object.assign(state.userInfo, {heraldryFame: "123"});

    switch (action.type) {
        case BlackDesertAction.CHANGE_USER_INFO:
            return {
                userInfo: Object.assign({}, state.userInfo, action.payload)
            };

        default:
            return state;
    }
}
