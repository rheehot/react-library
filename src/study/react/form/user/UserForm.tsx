import * as React from "react";
import InputItem from "../../common/form/InputItem";
import MyButton from "../../common/form/MyButton";
import "./UserForm.scss";
import {getUserInfo, insertUser, modifyUser} from "./api";
import {formRoutes} from "../../../../route/react/formRoutes";
import {PageType} from "../../../typescript/common/PageType";
import UserInfo from "./UserInfo";
import {RouteComponentProps} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";

export default function UserForm(props: RouteComponentProps) {

    const pageType = useMemo(() => {

        const insertRoute = formRoutes.find(route => route.meta.pageType === PageType.INSERT);

        if(insertRoute.path === location.pathname) {
            return PageType.INSERT;
        } else {
            return PageType.UPDATE;
        }
        
    }, []);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const idRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    
    function nameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function idChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
    }
    
    function emailChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function submit(event: React.MouseEvent<HTMLButtonElement>) {

        event.preventDefault();

        if(!id) {
            alert("id를 입력해주세요.");
            idRef.current.focus();
            return;
        }

        if(!name) {
            alert("name를 입력해주세요.");
            nameRef.current.focus();
            return;
        }

        if(!email) {
            alert("email를 입력해주세요.");
            emailRef.current.focus();
            return;
        }

        const userInfo = new UserInfo(parseInt(id), name, email);

        if(pageType === PageType.UPDATE) {
            modifyUser(userInfo.id, userInfo).then(() => {
                alert("수정 성공");
                props.history.push("/react/form/user/list");
            });

        } else {
            insertUser(userInfo).then(() => {
                alert("등록 성공");
                props.history.push("/react/form/user/list");
            });
        }

    }

    async function fetchData() {

        const userId = props.match.params.id;
        const {id, name, email} = await getUserInfo(userId);

        setId(String(id));
        setName(name);
        setEmail(email);
    }
    
    useEffect(() => {

        if(pageType === PageType.UPDATE) {
            fetchData().then();
        }

    }, []);

    return (
        <div className="component-wrap">
            <form>
                <InputItem inputRef={idRef} labelText="아이디" onChangeHandler={idChangeHandler} inputValue={id}/>
                <InputItem inputRef={nameRef} labelText="이름" onChangeHandler={nameChangeHandler} inputValue={name}/>
                <InputItem inputRef={emailRef} labelText="이메일" onChangeHandler={emailChangeHandler} inputValue={email}/>
                <MyButton className="submit-button" onClickHandler={submit}>저장</MyButton>
            </form>
        </div>
    );
}
