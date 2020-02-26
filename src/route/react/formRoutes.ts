import UserList from "../../study/react/form/user/UserList";
import UserForm from "../../study/react/form/user/UserForm";
import UsefulFormBug from "../../study/react/form/UsefulFormBug";

export const formRoutes = [
    {
        path: "/react/form/user/list",
        component: UserList,
        meta: {
            name: "회원목록"
        },
        exact: true
    },
    {
        path: "/react/form/user/:id",
        component: UserForm,
        meta: {
            name: "회원수정",
            linkPath: "/react/form/2"
        },
        exact: true
    },
    {
        path: "/react/form/user/create",
        component: UserForm,
        meta: {
            name: "회원추가"
        },
        exact: true
    },
    {
        path: "/react/form/basic",
        component: UsefulFormBug,
        exact: true
    }
];
