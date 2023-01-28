import { redirect } from "react-router-dom";

export const expirationAuth = () => {
    const storedExpirationTime = localStorage.getItem('expiration');
    const expirationTime = new Date(storedExpirationTime);
    const currentTime = new Date();
    const leftTime = expirationTime.getTime() - currentTime.getTime();
    return leftTime;
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const expirationTime = expirationAuth();
    if (expirationTime < 0) return 'EXPIRED';
    return token;
}
export const checkAuth = () => {
    const token = getToken();
    if (!token) {
        return redirect('/auth');
    }
    return null;
}

