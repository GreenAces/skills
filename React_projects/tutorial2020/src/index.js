import React from 'react'; //allows you to write JSX
import ReactDOM from 'react-dom'; //allows you to use the reactDOM.render()
import Header from "./Header.js"; //allows you to import larger code from a js file
import Body from "./Body.js";
import Footer from "./Footer.js";
import './index.css'; //allows you to use css







/*
video 2020 @ 1:34:27
Video 2022 @ 1:21:14

JSX Rules:

return a single element
use div / section / article or Fragment but dont create too many div tags
use camelCase (not pascal) for html attribute
className instead of class
close every element
formatting (use single or double quotes but be consistent with just one type)

Nested Components or React tools look like this => <ComponentName />

*/













function App () {

  return (
    <div>
    <Header />
    <Body />
    <Footer />
    </div>
  )


}


ReactDOM.render(<App />, document.getElementById("root"));
