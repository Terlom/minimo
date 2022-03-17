import Main from "./pages/Main"
import Lifestyle from "./pages/Lifestyle";
import PhotoDiary from "./pages/PhotoDiary";
import './App.scss';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Layout />}>
                  <Route index element={ <Main/> } />
                  <Route path="lifestyle" element={ <Lifestyle/> } />
                  <Route path="photodiary" element={ <PhotoDiary/> } />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
