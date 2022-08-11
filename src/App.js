
import './App.css';
import {NavBar} from "./components/NavBar.jsx";
import CartWidget from "./components/CartWidget/CardWidget";
function App() {
  return (

    <div className="App">
    <NavBar></NavBar>

    <div className="contentsContainer">
      <div className="insideNav">
      <CartWidget cartValue={20.66}/>

      </div>
      <div className="test2"></div>
      <br/>
      <div className="test2"></div> <br/>

      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div> <br/>
      <div className="test2"></div>
    </div>
    </div>
  );
}

export default App;
