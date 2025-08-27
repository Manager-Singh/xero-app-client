import React from "react";
import ConnectXero from "../components/ConnectXero";
import ContactsList from "../components/ContactsList";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Xero Integration with Vite</h1>
      <ConnectXero />
      <hr />
      <ContactsList />
    </div>
  );
};

export default Home;
