import React, {Component} from 'react';
import ItemCount from './components/ItemCount.jsx';
import NavBar from './components/NavBar.jsx';
import ProductsContainer from './components/ProductsContainer.jsx';






const App = () => (
  <div id="app">
    <NavBar/>
    <ProductsContainer/>
  </div>
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