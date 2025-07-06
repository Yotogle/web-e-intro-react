import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./Pages/Home"
import { AboutUs } from "./Pages/AboutUs"
import { Store } from "./Pages/Store"
import { Cart } from "./Pages/Cart"
import { NotFound } from "./Pages/NotFound"


export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/> {/* Home */}
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>

  )
}