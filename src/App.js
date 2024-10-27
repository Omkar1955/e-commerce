import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Shop from './context/Pages/Shop';
import Footer from './Components/Footer/Footer'
import ShopCategory from './context/Pages/ShopCategory';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Product from './context/Pages/Product'
import Cart from './context/Pages/Cart';
import LoginSignup from './context/Pages/LoginSignup';



function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Shop/>}/>
        <Route exact path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route exact path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
         <Route exact path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
         <Route exact path='/product' element= {<Product/>}>
         <Route exact path=':productId' element ={<Product/>} />
         </Route>
        
        
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/login'element={<LoginSignup/>}/>
        
      </Routes>
      
    
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
