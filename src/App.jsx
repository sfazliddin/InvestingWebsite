import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Stocks from "./pages/Stocks";
import Crypto from "./pages/Crypto";
import MyNavbar from "./components/navbar";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
