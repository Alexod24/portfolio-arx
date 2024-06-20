import logo from './logo.svg';
import './App.css';

import Modal from './components/page'
// import AboutTeam from './components/about-team'
// import Component from './components/pricing-sections/pricing-sections-8'
 
function App() {
  return (
    <div className="App">
      <Modal/>
      
      {/* <Component/> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
