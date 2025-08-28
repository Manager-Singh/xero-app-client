import React from "react";
import ConnectXero from "../components/ConnectXero";
import ThemesSelector from "./ThemeSelector";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home: React.FC = () => {
  const navigate = useNavigate()
  const HandleLogout = () => {
    localStorage.setItem("token", "")
    localStorage.setItem("user", "");
    navigate('/login')
  }

  const [activeThemes, setActiveThemes] = useState<any>(null);

  const handleThemesSelect = (Themes: any) => {
    console.log("Selected Themes:", Themes);
    setActiveThemes(Themes);
  };
  return (
    <div style={{ padding: "2rem" }}>
      <div><button className="btn btn-primary" onClick={HandleLogout}>Logout</button></div>
      <h1>Xero Integration with Vite</h1>
      <ConnectXero />
      <div className="max-w-lg mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Xero Integration</h1>
        <ThemesSelector onSelect={handleThemesSelect} />
        {activeThemes && (
          <div className="mt-4 p-4 border rounded-md bg-gray-50">
            <p><strong>Active Themes:</strong> {activeThemes.ThemesName}</p>
            <p><strong>ID:</strong> {activeThemes.ThemesId}</p>
          </div>
        )}
      </div>
      <hr />

    </div>
  );
};

export default Home;
