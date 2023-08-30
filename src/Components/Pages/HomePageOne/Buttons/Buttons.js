import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  return (
    <>
    <div className="btns">
    <a href="#" className={`empty-btn ${props.className}`}>{props.empty}</a>
    </div>
    </>
  );
}
