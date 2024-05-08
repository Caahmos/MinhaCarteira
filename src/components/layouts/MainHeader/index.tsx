import React from "react";

import { useMemo, useState } from 'react';
import { useTheme } from '../../../hooks/theme'

import {
    Container,
    Profile,
    Welcome,
    UserName,
    Toggle,
    MenuHamburguer,
    ToggleView
} from './styles'

import emojis from '../../../utils/emojis'
import { useMenu } from '../../../hooks/openMenu'


const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const { open } = useMenu();

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
            <MenuHamburguer onClick={() => { open() }} />
            <ToggleView>
                <Toggle
                    labelLeft='Claro'
                    labelRight='Escuro'
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ToggleView>

            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Cauã Morales</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader