import './App.css';
import Navigashione from './customer/components/navigashion/navigashion';

// import HomePage from './customer/components/Pages/HomePage/HomePage';
import Footer1 from './customer/components/Footer/Footer1';
import Product from './customer/components/Product/Product';
import { mens_kurta } from './customer/data/Men/men_kurta';



function App() {
  return (
    <div className="App">
        <Navigashione/>
      <div>
     {/* <HomePage/> */}
 <Product  />
     <div>
      <Footer1/>
     </div>
     </div>
    </div>
  );
}

export default App;
