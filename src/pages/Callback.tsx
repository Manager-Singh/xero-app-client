import React, { useEffect } from "react";

const XeroCallback: React.FC = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    // const code: string | null = urlParams.get("code");
    // const state: string | null = urlParams.get("state");

    // if (code && state) {
      fetch("http://localhost:5000/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "urlparams":urlParams.toString() }),
      })
        .then((res) => res.json())
        .then((data: unknown) => {
          console.log("Backend token exchange result:", data);
        })
        .catch((err) => {
          console.error("Error exchanging Xero token:", err);
        });
    // }
  }, []);

  return <h2>Connecting to Xero...</h2>;
};

export default XeroCallback;
