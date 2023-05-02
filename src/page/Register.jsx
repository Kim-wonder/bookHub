import React, { useState } from "react";
import "./Register.scss";
import Button_L from "../components/atoms/Button_L";
import Input_L from "../components/atoms/Input_L";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [checkPw, setCheckPw] = useState(true);

  const signup = async () => {
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  };
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

  const emailChange = (mail) => {
    setEmail(mail);
    console.log(mail);
  };
  const pwChange = (pw) => {
    setEmail(pw);
    console.log(pw);
  };
  const pw2Change = (pw2) => {
    setEmail(pw2);
    console.log(pw2);
  };

  if (password !== password2) {
    setCheckPw(false);
  }

  return (
    <div className="container_">
      <div className="wrap_">
        <img src="public/regi.svg" className="regi" title="북허브 회원가입" />
        <div className="infoArea">
          <Input_L text="이메일" type="email" change={emailChange}></Input_L>
          <div className="check">
            <Button_L btnName="중복검사"></Button_L>
          </div>
          <div className="pwArea">
            <Input_L
              text="비밀번호"
              type="password"
              change={pwChange}
              id="pw"
            ></Input_L>
            <Input_L
              text="재입력"
              type="password"
              change={pw2Change}
              id="pw2"
              style={{ borderColor: checkPw ? null : "red" }}
            ></Input_L>
          </div>
        </div>
        <div className="registerArea">
          <Button_L btnName="뒤로가기"></Button_L>
          <Button_L btnName="가입하기" onClick={signup}></Button_L>
        </div>
      </div>
    </div>
  );
}
