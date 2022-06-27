import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header';
import Main from './components/main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;

// https://color.adobe.com/search?q=social%20media
