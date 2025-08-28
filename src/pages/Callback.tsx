import React, { useEffect } from "react";

const XeroCallback: React.FC = () => {
     
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    // const code: string | null = urlParams.get("code");
    // const state: string | null = urlParams.get("state");
   const userString = localStorage.getItem("user");
   let userId = null;

   if (userString) {
    const user = JSON.parse(userString);
    userId = user.id; // adjust if your user object has a different field
   }

    // if (code && state) {
      fetch(`${import.meta.env.VITE_API_URL}/callback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "urlparams":urlParams.toString() , userId: userId }),
      })
        .then((res) => res.json())
        .then((data: unknown) => {
          console.log("Backend token exchange result:", data);
          if(data && data.token){
          
            window.location.href = "/"; 

          }
        })
        .catch((err) => {
          console.error("Error exchanging Xero token:", err);
        });
    // }
  }, []);

  return <h2>Connecting to Xero...</h2>;
};

export default XeroCallback;
