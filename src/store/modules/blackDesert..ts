export enum BlackDesertAction {

}

export interface BlackDesertState {

}

const initialState: BlackDesertState = {};

export default function blackDesertReducer(state: BlackDesertState = initialState, action: { type: BlackDesertAction }): BlackDesertState {

    switch (action.type) {
        default:
            return state;
    }
}
