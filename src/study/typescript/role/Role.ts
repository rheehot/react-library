enum CafeRole {
    OWNER = "owner",
    VICE_MANAGER = "vice-manager",
    DESIGN_STAFF = "design-staff",
    EVENT_STAFF = "event-staff",
    HR_STAFF = "hr-staff",
}

enum Action {
    CREATE_STAFF,
    UPDATE_STAFF,
    DELETE_STAFF,
    SELECT_STAFFS,

    CREATE_EVENT,
    /* */

    INVITE_USER,
    /* */

    DESIGN_UPDATE_CAFE,
    /* */
}

const canActionByRole = (function () {

    const _canActionByRole: { [index: string]: any } = {};

    _canActionByRole[CafeRole.OWNER] = [
        ...Object.keys(Action)
    ];

    _canActionByRole[CafeRole.VICE_MANAGER] = [
        /* 수십개 수백개의 액션 */
    ];

    _canActionByRole[CafeRole.DESIGN_STAFF] = [
        /* 수십개 수백개의 액션 */
    ];

    return Object.freeze(_canActionByRole);
}());

function canAction(userRole: CafeRole, action: Action): boolean {

    return canActionByRole[userRole].includes(action);
}

/*
문제1.
서버측에서 role하나가 추가되면
front 쪽에서도 추가해야함.

문제2.
기능 하나 만들 때마다 Action enum에 추가해야함.
그리고 이어서 canActionByRole에도 추가해야함.
그래서 canActionByRole와 Action에 목록이 무진장많이들어갈거임.

문제3.
서버에서도 권환관련 설계와 구현이 들어갈탠데,
저렇게하면 서버에서 구현된것들을 하나도 이용할 수 없음.

그렇다고 enum같은걸 안쓰고 그냥 문자열로 받기에는... 흠..
 */
