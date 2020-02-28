import * as React from "react";
import {RefObject} from "react";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
    inputValue: string
}

export default class RefClassComponent extends React.PureComponent<AppProp, AppState> {

    myRef: RefObject<HTMLInputElement>;

    constructor(props: AppProp) {
        super(props);

        this.state = {
            inputValue: "0",
        };

        this.myRef = React.createRef<HTMLInputElement>();
        this.submit = this.submit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    submit(event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {

        event.preventDefault();

        if(!this.state.inputValue) {
            alert("빈 문자열을 입력할 수 없어요.");
            this.myRef.current.focus();
            return;
        }

        alert("제출완료");
    }

    onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {

        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref={this.myRef} value={this.state.inputValue} onChange={this.onChangeHandler}></input>
                <MyButton onClickHandler={this.submit}>제출</MyButton>
            </form>
        )
    }
}
