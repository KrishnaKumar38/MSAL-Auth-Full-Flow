This repository contains, 

         a. Front End APP created using React, a simple app uses MSAL package to fetch token from Azure Entra ID for the Backend API
         b. Backend API, protected api, simple api which recieves token from front end app and validates the token and based on the validation result, either allows or rejects the request from front end app.

Front end app -> registered in azure entra is under App registration ( under API permission added scope as backend API permission to access backend api)
Backend app -> registerd under same tenant as front end app, created Application URI and created custome scope.

Upon running both apps, from front end, sign in -> goes to Azure entra id and gets token using MSAL package( retrieves token, refresh the token silently, stores it in localc storage)
                                        recieves token -> calls backend api -> recieves data -> logs it in console.
