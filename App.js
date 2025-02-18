import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Hello React!!!");

console.log(heading);

//jsx => ReactElement(Js-object) => HTMLElement(render)
const jsxHeading = <h1 id="heading">Hello React from jsx!!!</h1>
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

 