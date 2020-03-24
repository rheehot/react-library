import UserList from "../../containers/react/form/user/UserList";
import UserForm from "../../containers/react/form/user/UserForm";
import UsefulFormBug from "../../containers/react/form/UsefulFormBug";
import {PageType} from "../../utils/common/PageType";
import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";

const path = `${REACT_FIRST_PATH_DIRECTORY_NAME}/form`;

export const formRoutes = [
    {
        path: `${path}/user/list`,
        component: UserList,
        meta: {
            name: "회원목록",
        },
        exact: true
    },
    {
        path: `${path}/user/modify/:id`,
        component: UserForm,
        meta: {
            name: "회원수정",
            hoverable: false
        },
        exact: true
    },
    {
        path: `${path}/user/create`,
        component: UserForm,
        meta: {
            name: "회원추가",
            pageType: PageType.INSERT
        },
        exact: true
    },
    {
        path: `${path}/basic`,
        component: UsefulFormBug,
        exact: true
    },
];
