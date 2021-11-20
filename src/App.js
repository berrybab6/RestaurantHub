import './App.css';
import Home1 from './MyComp/home';
import Menus from './MyComp/menu/menus';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from './MyComp/NavBar/navbar';
import Login from './MyComp/auth/login';
// import Home from './components/Home.js'

function App() {
  return (
    
<div className="app">
  <NavBar/>
<Switch>
<Route path="/login">
    <Login />
  </Route>
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
