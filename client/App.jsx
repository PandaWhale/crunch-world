import React, { Component } from "react";
import ItemCount from "./components/ItemCount.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductsContainer from "./components/ProductsContainer.jsx";
//REACT ROUTER imports:
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";

const App = () => (
  // Step1. Surround component in <Router></Router>
  <Router>
    <div id="app">
      <NavBar />
      <ProductsContainer id={"ProductsContainer0"} />
    </div>
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
    </Switch>
  </Router>
);

export default App;

// class App extends Component {
//   componentDidMount() {
//     console.log('From App.jsx: All components loaded!',);
//     //dispatch to grab products
//   }

//   render() {
//     return (
//       <div>
//         <NavBar/>
//         <ProductsContainer/>
//       </div>
//     );
//   }
// }
