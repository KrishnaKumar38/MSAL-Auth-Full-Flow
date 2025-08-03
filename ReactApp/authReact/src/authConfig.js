export const msalConfig = {
    auth: {
      clientId: "front end app client id from azure entra app registration",
      authority: "https://login.microsoftonline.com/<tenantid>",
      redirectUri: "frontend localhost url/ deployed proper url"
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false
    }
  };
  
  export const loginRequest = {
    scopes: ["api://<clientid>/<scopename>"]
  };
  
