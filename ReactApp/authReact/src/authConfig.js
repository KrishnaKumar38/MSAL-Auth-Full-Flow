export const msalConfig = {
    auth: {
      clientId: "729b2366-5261-4968-9f12-f224f81e79bd",
      authority: "https://login.microsoftonline.com/e0e2801f-e3b2-4a87-a94a-4e2a8334f200",
      redirectUri: "http://localhost:5173/"
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false
    }
  };
  
  export const loginRequest = {
    scopes: ["api://16d8a3d8-8d75-4fa4-811b-179284cd1865/access_as_user"]
  };
  