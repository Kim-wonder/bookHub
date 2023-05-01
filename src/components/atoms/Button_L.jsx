import React from "react";

export default function Button_L(props) {
  console.log(props);
  return (
    <>
      <button type="button">{props.value}</button>
    </>
  );
}
