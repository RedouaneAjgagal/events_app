import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const MainRoot = () => {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    )
}

export default MainRoot