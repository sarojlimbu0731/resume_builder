import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";
import { UserDetail } from "./pages/UserDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/userdetail" element={<UserDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
