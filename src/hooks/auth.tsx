import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProps> = ({ children }) => {
    const navigate = useNavigate();

    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minhacarteira:logged');

        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if (email === 'caua@gmail.com' && password === '123') {
            localStorage.setItem('@minhacarteira:logged', JSON.stringify(true))
            setLogged(true);
            navigate('/dashboard');
        } else {
            alert('Senha ou usuário inválidos!');
        };
    };

    const signOut = () => {
        localStorage.removeItem('@minhacarteira:logged');
        setLogged(false);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };