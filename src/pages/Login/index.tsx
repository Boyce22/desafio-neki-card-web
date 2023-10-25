import { useState } from 'react'

import { Input } from '@components/Input'
import { NavLink } from "react-router-dom";
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { useAuth } from '../../hooks/useAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Container, ContainerForm, Title, MessageRegister, RedirectLink } from './styles'

export function Login() {

    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(email: string, password: string) {
        try {
            await signIn(email, password);
            toast.success('Successful login, welcome admin', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        } catch (error) {
            toast.error('Failed to sign in. Please check your credentials.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    }

    return (
        <>
            <Container>
                <Header />
                <ContainerForm>
                    <Title>Log in</Title>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        limit={1}
                    />
                    <Input
                        variant="default"
                        placeholder="Your E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Your Passoword"
                        variant="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        textButton={'Login'}
                        onClick={() => handleLogin(email, password)}
                    />
                    <MessageRegister>Are you a contributor?</MessageRegister>
                    <NavLink to="/register">
                        <RedirectLink>Register here collaborator</RedirectLink>
                    </NavLink>
                </ContainerForm>
            </Container>
        </>
    );
}