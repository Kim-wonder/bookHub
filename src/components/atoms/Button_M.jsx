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
  width: 80px;
  height: 40px;
  margin: 5px 15px;
  border: 3px solid black;
  border-radius: 3px;
  background-color: rgba(90, 198, 155, 1);
  box-shadow: 6px 6px rgba(137, 109, 1991);

  font-size: 1rem;
  font-family: "IBM_Bold", Arial, Helvetica, sans-serif;

  cursor: pointer;

  &:hover {
    background-color: rgba(137, 109, 1991);
    box-shadow: 6px 6px rgba(90, 198, 155, 1);
  }
  &:active {
    background-color: #ffffff;
    box-shadow: none;
  }
`;
