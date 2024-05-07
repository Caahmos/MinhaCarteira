import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../components/pages/Auth/Login';
import Register from '../components/pages/Auth/Register';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path='/login' element={< Login />} />
    </Routes>
)

export default AuthRoutes;