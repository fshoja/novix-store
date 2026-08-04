
import './app.css'
import {  Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Footer from "./component/footer/Footer";
import { ShopcontextProvider } from "./context/Shopcontext";
import Toast from "./toast/Toast";

export default function App() {
  return (
    <>
    <ShopcontextProvider>
   <Navbar/> 

<main className="pb-5 ">
  <div className="container">

      <Routes>
      <Route path="/"element={<Shop/>}/>
      <Route path="/cart"element={<Cart/>}/>
    </Routes>
    </div>  

</main>

<Toast/>
<Footer/>
</ShopcontextProvider>


      </>
  );
}













