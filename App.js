import React from "react";
import ReactDOM from "react-dom/client";


//jsx => ReactElement(Js-object) => HTMLElement(render)

const elem = <span>React Element </span>





const Title = () => (
    <h1 className="head" tabIndex="5">
        Hello React from jsx!!!
    </h1>
);


const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 id="heading">React Functional Component</h1>
    </div>
    
)

const elementt = (
    <div>
        <h1 className="title">
            {elem}
            YO YO YO YO
        </h1>
    <HeadingComponent/>
    </div>    

    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elementt);

 