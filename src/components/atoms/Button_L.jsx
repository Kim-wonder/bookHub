import React from "react";
import styled from "styled-components";

export default function Button_L(props) {
  return (
    <>
      <Button type="button">{props.btnName}</Button>
    </>
  );
}

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px 15px;
  border: 3px solid black;
  border-radius: 3px;
  background-color: #5ac69b;
  box-shadow: 6px 6px #896dc7;

  font-size: 1rem;
  font-family: "IBM_Bold", Arial, Helvetica, sans-serif;

  cursor: pointer;

  &:hover {
    background-color: #896dc7;
    box-shadow: 6px 6px #5ac69b;
  }
  &:active {
    background-color: #ffffff;
    box-shadow: none;
  }
`;
