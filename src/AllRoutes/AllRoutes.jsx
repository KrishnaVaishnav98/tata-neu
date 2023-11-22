import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
        </Routes>
    )
}
