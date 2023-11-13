import * as React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Registration} from "./pages/Registration/Registration"
import {Login} from './pages/Login/Login';
import {Admin} from './pages/Admin/Admin';

function App() {
  return (
    <>
    <h1>Registration App</h1>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

// changes

export default App;

