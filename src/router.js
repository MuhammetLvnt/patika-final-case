import React from "react";
import { Route, Routes } from "react-router-dom";
import StarshipList from "./components/StarshipList";
import Home from "./view/Home";
import SearchList from "./components/Search/SearchList";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/StarshipList" element={<StarshipList />}></Route>
        <Route path="/searchList" element={<SearchList />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
