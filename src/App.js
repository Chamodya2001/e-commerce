import './App.css';
import Navigashione from './customer/components/navigashion/navigashion';

// import HomePage from './customer/components/Pages/HomePage/HomePage';
import Footer1 from './customer/components/Footer/Footer1';
import ProductCart from './customer/components/Product/ProductCart';



function App() {
  return (
    <div className="App">
        <Navigashione/>
      <div>
     {/* <HomePage/> */}
     <ProductCart/>
     <div>
      <Footer1/>
     </div>
     </div>
    </div>
  );
}

export default App;
