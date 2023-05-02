import React from "react";
import styled from "styled-components";

export default function HeaderBar() {
  return (
    <>
      <Header>
        <img src="public/logo.svg" className="logo" title="북허브" />
      </Header>
    </>
  );
}

const Header = styled.div`
  width: 768px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px -6px #bababa;

  position: fixed;
  top: 0;
`;
