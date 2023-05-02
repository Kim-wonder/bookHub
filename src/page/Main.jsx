import React from "react";
import "./Main.scss";
import Header from "../components/HeaderBar";
import Footer from "../components/FooterBar";

export default function Main() {
  return (
    <>
      <Header className="header"></Header>
      <div className="mainContainer">여기가 메인화면 입니다.</div>
      <Footer className="footer"></Footer>
    </>
  );
}
