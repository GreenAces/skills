import logo from './logo.svg';
import './App.css';


const title = 'React';

function App() {

// you can do something in between


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {title}</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
