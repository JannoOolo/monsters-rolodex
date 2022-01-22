import logo from './logo.svg';
import { Component } from 'react/cjs/react.production.min';
import './App.css';

class App extends Component{
  constructor(){
    super( );
    this.state ={
      string: 'HEllo Janno'
    };
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{ this.state.string }</p>
        <button onClick={()=>this.setState({string:'hello Oolo'})}>Change text</button>
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
  )}
}

export default App;
