/*
A method for getting the CSRF Token (cross-site request forgery). 
Under most circumstances this is available client side as `window.g_ck` and can / should be used when making calls to 
the REST API by setting the header "X-UserToken" equal to it's value. 
When using the REST API from the client, making a request with this header set will allow you to skip 
the login prompt which otherwise accompanies such requests. The script below may be useful in a variety 
of integration settings which may require use of the CSRF token. In my use case, we wanted to use the 
REST API via a Direct UI Page where the `window.g_ck` object is not provided. Instead, we can provide the token 
to our UI Page via either of the below methods.
*/

// Get CSRF Token
// Global:
gs.getSessionToken();

// In App Scope:
gs.getSession().getSessionToken();

//TBD: Stort the Session Token in a global variable
