import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
    const { logged } = useAuth();
    console.log(logged);
    return (
        <Router>
            
                {
                    logged 
                    ? <AppRoutes /> 
                    : <AuthRoutes />
                }
           
        </Router>
    )
}

export default Routes