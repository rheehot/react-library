import UserInfo from "../../study/black-desert/trade-market/UserInfo";

export enum BlackDesertAction {
    CHANGE_USER_INFO = "black-desert/CHANGE_USER_INFO",
}

export interface BlackDesertState {
    userInfo: UserInfo;
}

const initialState: BlackDesertState = {
    userInfo: new UserInfo(5700, true)
};

export default function blackDesertReducer(state: BlackDesertState = initialState, action: { type: BlackDesertAction, payload: UserInfo }): BlackDesertState {

    switch (action.type) {
        case BlackDesertAction.CHANGE_USER_INFO:
            return {
                userInfo: Object.assign<{}, UserInfo, UserInfo>({}, state.userInfo, action.payload)
            };

        default:
            return state;
    }
}
