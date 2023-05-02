import React from "react";
import styled from "styled-components";

export default function FooterBar() {
  return (
    <>
      <Footer>
        <Ico_h src="public/home.svg" className="ico home" />
        <WrapIco>
          <Ico_w src="public/write.svg" className="ico wirte" />
        </WrapIco>
        <Ico_a src="public/admin.svg" className="ico admin" />
      </Footer>
    </>
  );
}

const Footer = styled.div`
  width: 768px;
  height: 76px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;

  box-shadow: 0px -4px 6px -6px #bababa;

  position: fixed;
  bottom: 0;
`;

const Ico_h = styled.img`
  width: 40px;
  height: 40px;
`;
const Ico_w = styled.img`
  width: 35px;
  height: 35px;
  padding: 5px;
`;
const Ico_a = styled.img`
  width: 40px;
  height: 40px;
`;

const WrapIco = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  background-color: #5ac69b;
  opacity: 0.8;
`;
