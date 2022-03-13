import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* Application Components */
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Transfer from './Pages/Transfer';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
    )
}