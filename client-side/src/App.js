// App.js
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import { Cart } from "./pages/Cart";
import Login from "./Components/Login/Login";
import Dashboard from "./pages/Dashboard";
import OTPVerification from "./Components/Login/OTPVerification";
import Admin from "./pages/Admin/Admin";
import ShopContextProvider from "./Context/ShopContext";
import "../src/App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./pages/About/About";

function App() {
  const [verify, setVerify] = useState(false);
  const [email, setemail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      {verify ? (
        <OTPVerification setVerify={setVerify} email={email} />
      ) : isAdmin ? (
        <Admin setIsAdmin={setIsAdmin} />
      ) : (
        <>
          <ShopContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={
                  <Login
                    setVerify={setVerify}
                    setemail={setemail}
                    setIsAdmin={setIsAdmin}
                  />
                }
              />
              <Route path="/dashboard" element={<Dashboard email={email} />} />

              <Route
                path="/bedroom"
                element={<ShopCategory category="Bedroom" />}
              />
              <Route
                path="/kitchen"
                element={<ShopCategory category="Kitchen" />}
              />
              <Route
                path="/livingroom"
                element={<ShopCategory category="Livingroom" />}
              />
              <Route
                path="/outdoors"
                element={<ShopCategory category="outdoors" />}
              />
              <Route path="/product/:productId" element={<Product />} />

              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </ShopContextProvider>
        </>
      )}
    </div>
  );
}

export default App;
