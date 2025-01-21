import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import HomePageData from "./pages/HomePageData";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar/>
    <SearchBar/>
      <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/home-data' element={<HomePageData/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
};

export default App;