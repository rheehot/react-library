import * as React from "react";
import {useRef, useState} from "react";
import MyButton from "../../common/form/MyButton";
import RefHooksChild from "./RefHooksChild";

interface AppProp {

}

export default function RefHooksParent(props: AppProp) {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function submit(event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {

        event.preventDefault();

        if(!inputValue) {
            alert("빈 문자열을 입력할 수 없습니다.");
            inputRef.current.focus();

        } else {
            alert("입력성공");
        }
    }

    return (
        <form className="component-wrap">
            <RefHooksChild inputRef={inputRef} onChangeHandler={onChangeHandler} inputValue={inputValue}/>
            <MyButton onClickHandler={submit}>제출</MyButton>
        </form>
    )
}
