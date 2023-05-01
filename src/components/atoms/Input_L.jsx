import React from "react";
import styled from "styled-components";

export default function Input_L(props) {
  return (
    <>
      <Input placeholder={props.text} type={props.type}></Input>
    </>
  );
}

const Input = styled.input`
  width: 320px;
  max-width: 600px;
  height: 2rem;
  margin: 8px 0;
  border: none;
  background-color: #e1e1e1;
  &:focus {
    outline: none;
    background-color: #a4dbc5;
  }
`;
