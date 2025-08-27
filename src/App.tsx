import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import XeroCallback from "./pages/Callback";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./pages/Register";
import ProtectedLayout from "./components/ProtectedRoute";


const App: React.FC = () => {
  return (
    <Router>
      
      {/* <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        
      </nav> */}

      <div className="p-4">
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

             <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Home />} />
             </Route>
          
            <Route path="/callback" element={<XeroCallback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
