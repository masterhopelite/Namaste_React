//creating nested div or other nested tags , React 18
/*
<div id="parent">
        <div id="child">
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag </h2>
        </div>
</div> 
<div id="parent">
        <div id="child">
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag </h2>
        </div>
</div>        
*/
//react element(object )=> html (browser understands) during rendering
const parent= 
[React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
//array for siblings in div(html)
[React.createElement("h1",{},"i am the h1 tag"),React.createElement("h2",{},"i am the h2 tag")]
 ) 
),
React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"i am the h1 tag"),React.createElement("h2",{},"i am the h2 tag")]
 ) 
)]            
            
            // {}--> attribute to the tag id , class 
            // heading is react element and a reactelement is a javascript object 
            //props = attribute(id,xyz) + children(hello world...) 
            const heading = React.createElement(
                "h1",
                {id: "heading",xyz:"abc"},
                "Hello World From React inside it"
            )
            // root for our react library
            const root = ReactDOM.createRoot(document.getElementById("root"));
            // everything render in root
            //passing js object--> heading which is reactelement 
            // render method is converting this object into the tag and putting it on the html 
            //root.render(heading);
            root.render(parent);  