import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './page/home';
import Header from './components/header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/footer';
import Listing from '../src/page/listing/list';
import ProductModal from "../src/components/productmodel/pmodel";
import ProductDetails from './page/productdetails/productd';
import Cart from './page/cart/cart';
import SingIn from './page/singin/singin';
import Singup from './page/singup/singup';

const mycontext = createContext();

  function App() {

    const [isOpenProductModel , setisOpenProductModel] = useState(false)
    const [courtrylist,setcourtrylist] = useState([]);
    const [selectedCountry,setselectedCountry] = useState('');
    const [isheaderfootrshow,setisheaderfootrshow] = useState(true);
    const [islogin ,setislogin] = useState(false)

    useEffect(()=>{
      getCountry("https://countriesnow.space/api/v0.1/countries/");
    },[])
    
    const getCountry = async (url) => {
      const res = await axios.get(url);
      setcourtrylist(res.data.data);
    };
    
    const values={
      courtrylist,
      setselectedCountry,
      selectedCountry,
      isOpenProductModel,
      setisOpenProductModel,
      isheaderfootrshow,
      setisheaderfootrshow,
      islogin,
      setislogin
    }
    return (
      <BrowserRouter>
      <mycontext.Provider value={values}>
        {
          isheaderfootrshow === true &&  <Header/>
        }
        <Routes>
            <Route path='/' exact={true} element={<Home/>}/>
            <Route path='/list/:id' exact={true} element={<Listing/>}/>
            <Route path='/product/:id' exact={true} element={<ProductDetails/>}/>
            <Route path='/cart' exact={true} element={<Cart/>}/>
            <Route path='/sigin' exact={true} element={<SingIn/>}/>
            <Route path='/signUp' exact={true} element={<Singup/>}/>
        </Routes>
        {
          isheaderfootrshow === true &&  <Footer/>
        }
        

        {
                isOpenProductModel === true &&  <ProductModal/>
            }

        </mycontext.Provider>
      </BrowserRouter>
    );
  }


export default App;
export {mycontext}
