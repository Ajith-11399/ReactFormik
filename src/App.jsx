import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Edit from "./Pages/Edit";
import Create from "./Pages/Create";
import Authors from "./Pages/Authors";
import BookOnly from "./Pages/BookOnly";

const App = () => {
  const[id, setId] = useState(0)
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home setId={setId}/>} />
          <Route path='/books' element={<Books />} />
          <Route path='/edit/:id' element={<Edit id={id} />} />
          <Route path='/create' element={<Create />} />
          <Route path='/bookOnly' element={<BookOnly  setId={setId}/>} />
          <Route path='/authors' element={<Authors  setId={setId}/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
