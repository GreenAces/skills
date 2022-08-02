import React from 'react'; //allows you to write JSX
import ReactDOM from 'react-dom';





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


function Header() {

  return (

    <header>
    <nav>
    <img src="./react-logo.png" width="40px"/>
    <ul className="nav-items">
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>
    </header>

  )
}

function Body() {

  return (

    <div>
    <h2>Why I love React: </h2>
    <ul>
    <li>It has an awesome library and you can hang out with the kool kids ;)</li>
    <li>You can get a job as a front end developer</li>
    <li>It's mobile friendly</li>
    </ul>
    </div>


  )
}




function Footer() {

  return (

      <small>Copyright @ 2022. All rights reserved.</small>
  )
}



function Page () {

  return (
    <div>
    <Header />
    <Body />
    <Footer />
    </div>
  )


}


ReactDOM.render(<Page />, document.getElementById("root"));
