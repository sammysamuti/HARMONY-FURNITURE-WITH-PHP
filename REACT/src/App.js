import { Route, Routes } from "react-router-dom";
import Footer from "../src/Components/Footer/Footer";
import "../src/App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
