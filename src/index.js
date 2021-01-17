import React from "react";
import ReactDom from "react-dom";

const name = "Vinícius Trindade";
const year = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
