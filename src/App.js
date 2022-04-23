import React from "react";
import News from "./News";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App () {
 
    return (
      <>
        <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
           <Route path="/" element={<News pageSize={12} country="in" category="general"/>}/>
           <Route path="/sports" element={<News pageSize={12} country="in" category="sports"/>}/>
           <Route path="/technology" element={<News pageSize={12} country="in" category="technology"/>}/>
           <Route path="/science" element={<News pageSize={12} country="in" category="science"/>}/>
           <Route path="/business" element={<News pageSize={12} country="in" category="business"/>}/>
           <Route path="/health" element={<News pageSize={12} country="in" category="health"/>}/>
           <Route path="/entertainment" element={<News pageSize={12} country="in" category="entertainment"/>}/>
          </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }

