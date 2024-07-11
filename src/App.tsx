//import React from "react";
//import UserList from "./component/UserList";
//import FakeApi from "./component/FakeApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMovie from "./component/AddMovie";
import AllMovies from "./component/AllMovies";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/add" element={<AddMovie />} />
    <Route path="/all" element={<AllMovies />} />
    

   </Routes>
   </BrowserRouter>
  );
}
