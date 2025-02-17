/*
<div id="parent">
    <div id="class">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="class2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>


*/

const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div",{id:"class"},
                [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]
                ),
                React.createElement("div",{id:"class2"},
                [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]
                )]
);


console.log(parent);

const heading = React.createElement("h1",{id: "heading"},"Hellow world from React!!");
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);