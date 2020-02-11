import UserList from "../../study/react/example/user/UserList";
import UserForm from "../../study/react/example/user/UserForm";

export const exampleRoutes = [
		{
				path: "/react/example/user/list",
				component: UserList,
				meta: {
						name: "회원목록"
				},
				exact: false
		},
		{
				path: "/react/example/user/:id",
				component: UserForm,
				meta: {
						name: "회원수정"
				},
				exact: false
		},
		{
				path: "/react/example/user/create",
				component: UserForm,
				meta: {
						name: "회원추가"
				},
				exact: false
		}
];