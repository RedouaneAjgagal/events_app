import React, { useEffect } from 'react'
import { Outlet, useSubmit } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import { expirationAuth, getToken } from '../util/Auth'

const MainRoot = () => {
    const expirationTime = expirationAuth();
    const submit = useSubmit();
    const token = getToken();
    useEffect(() => {
        if (!token) return;
        if (token === 'EXPIRED') {
            return submit(null, { method: 'post', action: '/logout' });
        }
        const checkExpiration = setTimeout(() => {
            return submit(null, { method: 'post', action: '/logout' });
        }, expirationTime)
        return () => clearTimeout(checkExpiration);
    }, [expirationTime, submit, token]);
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainRoot