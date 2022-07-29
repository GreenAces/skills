import React from "react"; //allows you to write JSX
import ReactDOM from "react-dom";

/*
video 2020 @ 1:34:27
Video 2022 @ 1:00:00

JSX Rules:

return a single element
use div / section / article or Fragment but dont create too many div tags
use camelCase for html attribute
class name instead of class
close every element
formatting (use single or double quotes but be consistent with them)

Nested Components or React tools look like this => <Tag />

*/

const page = (

  <div>
  <img src="C:\Users\Robert\Downloads\Chrome-downloads\sample.png" width="100px" height="100px"/>
  <h1>My awesome website in React</h1>
  <h3>Reasons I love React</h3>
  <ul>
  <li>It's composable</li>
  <li>It's declarative</li>
  <li>It's a hirable skill</li>
  <li>It's actively maintained by skilled people</li>
  </ul>
  </div>

)

ReactDOM.render(page, document.getElementById("root"));
