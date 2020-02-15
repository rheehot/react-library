import * as React from "react";
import UserInfo from "./UserInfo";
import {deleteUser, getUserList} from "./api";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {

	userList: Array<UserInfo>
}

export default class UserList extends React.Component<AppProp, AppState> {


	constructor(props: AppProp) {
		super(props);
		this.state = {
			userList: []
		};

	}

	async getuserList() {

		this.setState({
			userList: await getUserList()
		});
	}

	componentDidMount() {
		this.getuserList().then();
	}

	delete(item:UserInfo) {

		if(confirm(`${item.name}회원을 삭제하시겠습니까?`)) {

			deleteUser(item.id).then(res => {
				console.log(res);
				this.getuserList().then();
			});
		}
	}

	info(user: UserInfo, event: React.MouseEvent<HTMLButtonElement>) {

		alert(`${user.id}  ${user.name}  ${user.email}`);
	}

	renderUserList() {
		return (
			this.state.userList.map((item, index) => {
				return (
					<li className="user-list-li" key={`userList-${index}`}>
						<span className="name">{item.name}</span>
						<MyButton onClickHandler={event => this.info(item, event)}>info</MyButton>
						<MyButton onClickHandler={event => this.delete(item)}>delete</MyButton>
					</li>
				)
			})
		)
	}

    render() {
		return (
			<div className="component-wrap">
				<ul>
					{this.renderUserList()}
				</ul>
			</div>
		);
    }
}
