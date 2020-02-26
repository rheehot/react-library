import * as React from "react";
import UserInfo from "./UserInfo";
import {deleteUser, getUserList} from "./api";
import MyButton from "../../common/form/MyButton";

export default function UserList() {

	const [stateUserList, setStateUserList] = React.useState([]);

	React.useEffect(() => {

		getUserList().then((userList) => {

			setStateUserList([...userList]);
		});

	}, []);

	function userDelete(item:UserInfo) {

		if(confirm(`${item.name}회원을 삭제하시겠습니까?`)) {

			deleteUser(item.id).then(() => {

				getUserList().then((userList) => {

					setStateUserList([...userList]);
				});

			});
		}
	}

	function info(user: UserInfo) {

		alert(`${user.id}  ${user.name}  ${user.email}`);
	}

	function renderUserList() {
		return (
			stateUserList.map((item, index) => {
				return (
					<li className="user-list-li" key={`userList-${index}`}>
						<span className="name">{item.name}</span>
						<MyButton onClickHandler={() => info(item)}>info</MyButton>
						<MyButton onClickHandler={() => userDelete(item)}>delete</MyButton>
					</li>
				)
			})
		)
	}

	return (
		<div className="component-wrap">
			<ul>
				{renderUserList()}
			</ul>
		</div>
	);
}
