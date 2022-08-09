import './style/style.scss';
import Header from "./components/header/header";
import All from "./components/all/all";
import Breakfast from "./components/breakfast/breakfast";
import Coffee from "./components/coffee/coffee";
import Drink from "./components/drink/drink";
import Sup from "./components/sup/sup";
import Tea from "./components/tea/tea";
import Salad from "./components/salad/salad";
import Dessert from "./components/dessert/dessert";

function App() {
  return (
    <>
      <Header/>
        <All/>
        <Breakfast/>
      <Coffee/>
        <Drink/>
        <Sup/>\
        <Tea/>
        <Salad/>
      <Dessert/>

    </>
  );
}

export default App;
