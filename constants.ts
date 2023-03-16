// Spotify
export const GET_SPOTIFY_TOKEN = 'https://accounts.spotify.com/api/token';
export const AUTH_SPOTIFY = 'https://accounts.spotify.com/authorize?';
export const searchAlbumUrl = ({artist, market}: {artist: string, market: string}) => {
    return `https://api.spotify.com/v1/search?q=${artist}&market=${market}&include_external=audio&type=album`
}

// COMMON
export const SPOTIFY_LOGO_SIZE = 118;
export const MARKET = 'nl';

// API
const DOMAIN = 'http://localhost:3000';
const API_BASE = `${DOMAIN}/api`;
export const REDIRECT_URI: string = `${API_BASE}/auth/callback`;
export const LOGIN_URI = `${API_BASE}/auth/login`;
export const REFRESH_TOKEN_URI = `${API_BASE}/auth/refresh_token`;