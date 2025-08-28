import React from "react";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";

const ConnectXero: React.FC = () => {
  const generateCodeVerifier = () => {
    const array = new Uint32Array(56);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).slice(-2)).join('');
  };

  const base64UrlEncode = (str: string) =>
    str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const generateCodeChallenge = async (verifier: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await window.crypto.subtle.digest("SHA-256", data);
    return base64UrlEncode(btoa(String.fromCharCode(...new Uint8Array(digest))));
  };

  const handleConnect = async () => {
    const clientId = "6A772E61EED14CF488F75507E072BD38";
    const redirectUri = encodeURIComponent("https://800f5307bc34.ngrok-free.app/callback");
    const scope =
      "offline_access openid profile email accounting.transactions.read accounting.settings.read";

    const codeVerifier = generateCodeVerifier();
    localStorage.setItem("xero_code_verifier", codeVerifier);

    const codeChallenge = await generateCodeChallenge(codeVerifier);

    window.location.href = `https://login.xero.com/identity/connect/authorize?client_id=${clientId}&scope=${encodeURIComponent(
      scope
    )}&response_type=code&redirect_uri=${redirectUri}`;
  };

  return (
    <button
      onClick={handleConnect}
      style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
    >
      Connect to Xero
    </button>
  );
};

export default ConnectXero;
