import React from "react";
import "./Register.scss";
import Button_L from "../components/atoms/Button_L";
import Input_L from "../components/atoms/Input_L";

export default function Register() {
  return (
    <div className="container_">
      <div className="wrap_">
        <img src="public/regi.svg" className="regi" title="북허브 회원가입" />
        <div className="infoArea">
          <Input_L text="이메일" type="email"></Input_L>
          <div className="check">
            <Button_L btnName="중복검사"></Button_L>
          </div>
          <div className="pwArea">
            <Input_L text="비밀번호" type="password"></Input_L>
            <Input_L text="재입력" type="password"></Input_L>
          </div>
        </div>
        <div className="registerArea">
          <Button_L btnName="뒤로가기"></Button_L>
          <Button_L btnName="가입하기"></Button_L>
        </div>
      </div>
    </div>
  );
}
