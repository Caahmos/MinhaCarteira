import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../components/pages/Auth/Login';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path='/' element={< Login />} />
    </Routes>
)

export default AuthRoutes;