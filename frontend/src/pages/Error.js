import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';
const Error = () => {
    const error = useRouteError();
    console.log(error);
    let errorMsg = `${error.data.errorMsg || error.error} Status: ${error.status}`
    return (
        <>
            <MainNavigation />
            <h1>{errorMsg}</h1>
        </>
    )
}

export default Error