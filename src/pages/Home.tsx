import React from "react";
import ConnectXero from "../components/ConnectXero";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
const navigate= useNavigate()
const HandleLogout = ()=>{
  localStorage.setItem("token", "")
  localStorage.setItem("user", "");
     navigate('/login')
}
  return (
    <div style={{ padding: "2rem" }}>
      <div><button className="btn btn-primary" onClick={HandleLogout}>Logout</button></div>
      <h1>Xero Integration with Vite</h1>
      <ConnectXero />
      <hr />
      
    </div>
  );
};

export default Home;
