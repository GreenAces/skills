//import logo from './logo.svg';
//import './App.css';

import * as React from 'react';

const list =
[
  {
  title: 'React',
  url: 'https://reactjs.org',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },

 {
   title: 'Redux',
   url: 'https://redux.js.org',
   author: 'Dan Abramov, Andrew Clark',
   num_comments: 2,
   points: 5,
   objectID: 1,

 },

];


function App() {

// you can do something in between


  return (

    <div className="App">


      <h1> My Hacker Stories</h1>

      <Search /> 

      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>

      

      <hr />

    

      <ul>

      {list.map(function(item){

        return (
          <li key={item.objectID}>
          <span>
          <a href ={item.url} > {item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>


          </li>
          );

      })}
      </ul>




    </div>
  );
}

function Search ()
{
  return
  (

    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text"/>
    </div>

  );

}

export default App;
