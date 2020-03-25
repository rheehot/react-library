import {Action, createAction, handleActions} from "redux-actions";
import UserInfo from "../../classes/black-desert/UserInfo";

//Actions
const CHANGE_USER_INFO = "react-library/blackDesert/CHANGE_USER_INFO";

//Action Creators
export const changeUserInfo = createAction(CHANGE_USER_INFO);

//state and reducer
interface BlackDesertState {
    userInfo: UserInfo;
}

const initialState: BlackDesertState = {
    userInfo: new UserInfo(5700, true)
};

export const reducer = handleActions({

    [CHANGE_USER_INFO]: (state: BlackDesertState, action: Action<any>) => ({
        userInfo: Object.assign<{}, UserInfo, UserInfo>({}, state.userInfo, action.payload)
    })

}, initialState);
