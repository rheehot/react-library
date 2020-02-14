import * as React from "react";
import UserInfo from "./UserInfo";
import {getUserList} from "./api";
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

	async componentDidMount() {
		this.setState({
			userList: await getUserList()
		});
	}

	delete(item:UserInfo) {

		if(confirm(`${item.name}회원을 삭제하시겠습니까?`)) {
			console.log(`${item.id}회원 삭제`);
		}
	}

	info(user: UserInfo, event: React.MouseEvent<HTMLButtonElement>) {

		alert(`${user.id}  ${user.name}  ${user.email}`);
	}

	renderUserList() {
		return (
			this.state.userList.map((item, index) => {
				return (
					<li key={`userList-${index}`}>
						<span>{item.name}</span>
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
