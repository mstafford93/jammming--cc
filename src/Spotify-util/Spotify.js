let accessToken = '';
const clientId = ''; //Unable to access the Spotify for developers webpage

const Spotify {
    if (accessToken) return accessToken;
    // First check
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    // Second check
    if (tokenInURL && expiryTime) {
      // Setting access token and expiry time variables
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      // Setting the access token to expire at the value for expiration time
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      // clearing after expires
      window.history.pushState("Access token", null, "/");
      return accessToken;
    }

    // Third check if both false
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
    window.location = redirect;
  },


export {Spotify};