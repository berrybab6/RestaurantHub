
import './App.css';
import Home1 from './MyComp/home';
import Navbar from './components/Navbar.js'
import Menus from './MyComp/menu/menus';
import { Link, Route, Switch } from 'react-router-dom';
// import Home from './components/Home.js'

function App() {
  return (
    
<div className="app">
  {/* <Navbar/> */}
<Switch>
  
  <Route path="/menus">
    <Menus />
  </Route>
  <Route path="/">
    <Home1 />
  </Route>
</Switch>
</div>


  );
}

export default App;
