import logo from './logo.svg';
import './App.css';
import Word from './component/Word';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Word/>
        </p>
      </header>
    </div>
  );
}

export default App;
