import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Registration} from "./pages/Registration/Registration"
import {Login} from './pages/Login/Login';
import {Admin} from './pages/Admin/Admin';

function App() {
  return (
    <>Registration App
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

export default App;

