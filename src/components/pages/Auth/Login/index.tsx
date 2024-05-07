import React, { useState } from "react";

import logoImg from '../../../assets/logo.svg'
import Input from "../../../layouts/Input";

import {
    Container,
    Logo,
    Form,
    FormTitle
} from './styles'
import Button from "../../../layouts/Button";
import { useAuth } from "../../../../hooks/auth";

const Login: React.FC = () => {
    const { signIn } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h3>Minha Carteira</h3>
            </Logo>
            <Form onSubmit={(e) => { 
                e.preventDefault();
                signIn(email, password);
            }} >
                <FormTitle>Entrar</FormTitle>
                <Input type='email' name='email' placeholder="Digite o seu email" onChange={(e) => { setEmail(e.target.value) }} required />
                <Input type='password' name='password' placeholder='Digite a sua senha' onChange={(e) => { setPassword(e.target.value) }} required />

                <Button type='submit'>
                    Entrar
                </Button>
            </Form>
        </Container>
    )
}

export default Login