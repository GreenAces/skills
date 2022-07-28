import React from 'react'
import ReactDom from 'react-dom'

/*
JSX Rules:

return a single element
use div / section / article or Fragment but dont create too many div tags
use camelCase for html attribute
class name instead of class
close every element
formatting (use single or double quotes but be consistent with them)

video @ 1:26:23

*/

function Greeting ()
{
  return (

<div>
<h3>The Road To React</h3>
<ul>
<li>
<a href = '#'>Buy Free Book</a>
</li>
<img src= 'C:\Users\Robert\Downloads\Chrome-downloads\sample.png' alt= 'God of War'/>
<br></br>
<input type= 'text' name='book' id='demo'/>
</ul>
</div>

  );

}

ReactDom.render(<Greeting/>,document.getElementById('root'));
