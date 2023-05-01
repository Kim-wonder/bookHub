import React from "react";
import "./Login.scss";
import Button_L from "../components/atoms/Button_L";
import Input_L from "../components/atoms/Input_L";

export default function Login() {
  return (
    <div className="container">
      <div className="wrap">
        <img src="public/logo.svg" className="logo" title="북허브" />
        <div className="loginArea">
          <Input_L text="이메일" type="email"></Input_L>
          <Input_L text="비밀번호" type="password"></Input_L>
          <div className="loginBtn">
            <Button_L btnName="로그인"></Button_L>
          </div>
        </div>
        <div className="registerArea">
          <Button_L btnName="회원가입"></Button_L>
          <Button_L btnName="구글 로그인"></Button_L>
        </div>
      </div>
    </div>
  );
}
