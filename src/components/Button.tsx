import { React, useState, useEffect, useRef } from "react";

interface Props {
  onClickCB: () => void;
  text: string;
}

function Button({ onClickCB, text }: Props) {
  return (
    <button
      className="btn btn-outline-primary"
      onClick={(e) => {
        e.preventDefault();
        onClickCB();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
