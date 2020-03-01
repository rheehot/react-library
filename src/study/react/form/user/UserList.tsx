import * as React from "react";
import UserInfo from "./UserInfo";
import {deleteUser, getUserList} from "./api";
import MyButton from "../../common/form/MyButton";
import {RouteComponentProps} from "react-router-dom";
import {useEffect, useState} from "react";

interface AppProp extends RouteComponentProps {
}

export default function UserList(props: AppProp) {

	const [stateUserList, setStateUserList] = useState([]);

	async function fetchData() {
		setStateUserList([...await getUserList()]);
	}

	useEffect(() => {

		fetchData().then();

	}, []);

	function userUpdate(item: UserInfo) {
		props.history.push(`/react/form/user/modify/${item.id}`);
	}

	function userDelete(item:UserInfo) {

		if(confirm(`${item.name}회원을 삭제하시겠습니까?`)) {

			deleteUser(item.id).then(() => {

				fetchData().then();

			});
		}
	}

	function info(user: UserInfo) {

		alert(`${user.id}  ${user.name}  ${user.email}`);
	}

	function renderUserList() {
		return (
			<table className="user-table">
				<tbody>
					{stateUserList.map((item, index) => {
						return (
							<tr className="user-list-tr" key={`userList-${index}`}>
								<td><span>{item.id}</span></td>
								<td><span>{item.name}</span></td>
								<td><span>{item.email}</span></td>
								<td><MyButton onClickHandler={() => info(item)}>info</MyButton></td>
								<td><MyButton onClickHandler={() => userDelete(item)}>delete</MyButton></td>
								<td><MyButton onClickHandler={() => userUpdate(item)}>update</MyButton></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}

	return (
		<div className="component-wrap">
			{renderUserList()}
			<MyButton className="" onClickHandler={() => props.history.push("/react/form/user/create")}>회원등록</MyButton>
		</div>
	);
}
