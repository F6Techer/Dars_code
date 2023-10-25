import React from "react";
import "./style.scss";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import { Route, Routes } from "react-router-dom";

const Dars10 = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />

        <div className="routes">
            <Routes>
                <Route index element={<Men />}/>
                <Route path="women" element={<Women />}/>
                <Route path="kids" element={<Kids />}/>
                <Route path="sale" element={<Sale />}/>
            </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dars10;
