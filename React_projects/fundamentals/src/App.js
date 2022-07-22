import logo from './logo.svg';
import './App.css';


const title = 'React';

function App() {

// you can do something in between


  return (
    <div className="App">


        <h1>Hello {title}</h1>
        <p>Hello, Samantha! ;)</p>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>


    </div>
  );
}

export default App;
