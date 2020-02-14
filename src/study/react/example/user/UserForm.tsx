import * as React from "react";
import InputItem from "../../common/form/InputItem";
import MyButton from "../../common/form/MyButton";
import "./UserForm.scss";
import {getUserInfo} from "./api";

interface AppProp {
}

interface AppState {
    id: string,
    name: string,
    email: string
}

export default class UserForm extends React.Component<AppProp, AppState> {

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
        alert(` #result
id: ${this.state.id}
name: ${this.state.name}
email: ${this.state.email}`);

    }

    async componentDidMount(): Promise<void> {

        const {id, name, email} = await getUserInfo();

        this.setState({
            id: id,
            name: name,
            email: email
        });
    }

    render() {
        return (
            <div className="component-wrap">
                <form>
                    <InputItem labelText="아이디" onChangeHandler={this.idChangeHandler} inputValue={this.state.id}/>
                    <InputItem labelText="이름" onChangeHandler={this.nameChangeHandler} inputValue={this.state.name}/>
                    <InputItem labelText="이메일" onChangeHandler={this.emailChangeHandler} inputValue={this.state.email}/>
                    <MyButton className="submit-button" onClickHandler={this.submit}/>
                </form>
            </div>
        );
    }
}
