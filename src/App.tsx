import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import XeroCallback from "./pages/Callback";
// Example pages

const App: React.FC = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        
     
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/callback" element={<XeroCallback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
