import React from "react";

const ConnectXero: React.FC = () => {
  const handleConnect = () => {
    window.location.href = "https://login.xero.com/identity/connect/authorize?client_id=6A772E61EED14CF488F75507E072BD38&scope=offline_access%20openid%20profile%20email%20accounting.transactions.read%20accounting.settings.read&response_type=code&redirect_uri=https%3A%2F%2F65fadcf73e12.ngrok-free.app%2Fcallback"; // redirect to Node backend
  };

  return (
    <button onClick={handleConnect} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
      Connect to Xero
    </button>
  );
};

export default ConnectXero;
