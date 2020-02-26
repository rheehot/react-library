import * as React from "react";
import InputItem from "../../common/form/InputItem";
import MyButton from "../../common/form/MyButton";
import "./UserForm.scss";
import {getUserInfo, insertUser, modifyUser} from "./api";
import {formRoutes} from "../../../../route/react/formRoutes";
import {PageType} from "../../../typescript/common/PageType";
import UserInfo from "./UserInfo";
import {RouteComponentProps} from "react-router-dom";

interface AppProp extends RouteComponentProps {
}

interface AppState {
    id: string,
    name: string,
    email: string
}

export default class UserForm extends React.Component<AppProp, AppState> {

    readonly pageType: PageType;

    constructor(props: AppProp) {
        super(props);

        this.state = {
            id: "",
            name: "",
            email: ""
        };

        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.idChangeHandler = this.idChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.submit = this.submit.bind(this);

        const insertRoute = formRoutes.find(route => route.meta.pageType === PageType.INSERT);

        if(insertRoute.path === location.pathname) {
            this.pageType = PageType.INSERT;
        } else {
            this.pageType = PageType.UPDATE;
        }
    }

    nameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: event.target.value
        })
    }

    idChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {

        this.setState({
            id: event.target.value
        })
    }

    emailChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {

        this.setState({
            email: event.target.value
        })
    }

    submit(event: React.MouseEvent<HTMLButtonElement>) {

        event.preventDefault();

        const {id, name, email} = this.state;
        const userInfo = new UserInfo(parseInt(id), name, email);

        if(this.pageType === PageType.UPDATE) {
            modifyUser(userInfo.id, userInfo).then(() => {
                alert("수정 성공");
                this.props.history.push("/react/form/user/list");
            });

        } else {
            insertUser(userInfo).then(() => {
                alert("등록 성공");
                this.props.history.push("/react/form/user/list");
            });
        }

    }

    async componentDidMount(): Promise<void> {

        if(this.pageType === PageType.UPDATE) {

            const userId = this.props.match.params.id;

            const {id, name, email} = await getUserInfo(userId);

            this.setState({
                id: String(id),
                name: name,
                email: email
            });
        }
    }

    render() {
        return (
            <div className="component-wrap">
                <form>
                    <InputItem labelText="아이디" onChangeHandler={this.idChangeHandler} inputValue={this.state.id}/>
                    <InputItem labelText="이름" onChangeHandler={this.nameChangeHandler} inputValue={this.state.name}/>
                    <InputItem labelText="이메일" onChangeHandler={this.emailChangeHandler} inputValue={this.state.email}/>
                    <MyButton className="submit-button" onClickHandler={this.submit}>저장</MyButton>
                </form>
            </div>
        );
    }
}
