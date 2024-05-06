import React from "react";

import { useMemo, useState } from 'react';
import Toggle from '../Toggle';
import { useTheme } from '../../../hooks/theme'

import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles'

import emojis from '../../../utils/emojis'

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice];
    }, [])

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
        console.log(darkTheme);
    }

    return (
        <Container>
            <Toggle
                labelLeft='Claro'
                labelRight='Escuro'
                checked={darkTheme}
                onChange={ handleChangeTheme }
            />

            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Cauã Morales</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader