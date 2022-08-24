
import './App.css';
import {NavBar} from "./components/NavBar.jsx";
import CartWidget from "./components/CartWidget/CartWidget.jsx";

import ItemCounter from "./components/ItemCounter/ItemCounter";

import {getTotal} from "./components/ItemCounter/ItemCounter";

function App() {
  return (

    <div className="App">
    <NavBar></NavBar>

    <div className="contentsContainer">
      <div className="insideNav">

      <CartWidget cartValue={getTotal}/>


      </div>

      <ItemCounter itemTitle = {"Classic T-shirt"} itemPrice={12} initial = {1} stock = {4}></ItemCounter>
      <ItemCounter itemTitle = {"Classic T-shirt"} itemPrice={12} initial = {1} stock = {4}></ItemCounter>

      <div className="test2"></div>


    </div>
    </div>
  );
}

export default App;
