import React from "react";
import { MsalProvider, useMsal, useAccount, useIsAuthenticated } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

function LoginButton() {
  const { instance } = useMsal();

  return (
    <button onClick={() => instance.loginRedirect(loginRequest)}>
      Sign in
    </button>
  );
}

function CallApi() {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0]);

  const callBackend = async () => {
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account
    });

    const token = response.accessToken;
    console.log(token);
    const result = await fetch("your backend api endpoint", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await result.json();
    console.log("API Response: " + data.join(", "));
    data.forEach(forecast => {
      console.log(`Date: ${forecast.date}, Temp: ${forecast.temperatureC}°C, Summary: ${forecast.summary}`);
    });
  };

  return <button onClick={callBackend}>Call Weather API</button>;
}

function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      <h1>Azure Entra ID + MSAL + API Demo</h1>
      {!isAuthenticated ? <LoginButton /> : <CallApi />}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  );
}
