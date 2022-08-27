
import './App.css';
import {NavBar} from "./components/NavBar.jsx";
import CartWidget from "./components/CartWidget/CartWidget.jsx";
import NavBarMenu from "./components/NavBarMenu";
import {test1} from "./components/CartWidget/CartWidget.jsx";
import ItemCounter from "./components/ItemCounter/ItemCounter";

import {getTotal} from "./components/ItemCounter/ItemCounter";

function App() {

  const UpdateCartValueDisplay = () => {
    return 117;
  }

  return (

    <div className="App">
      <NavBar></NavBar>
    <NavBarMenu></NavBarMenu>

    <div className="contentsContainer">
      <div className="insideNav">

      <CartWidget cartValue={getTotal}/></div>



      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>
      <div className="test2"></div>



    </div>
    </div>
  );
}

export default App;
