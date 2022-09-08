import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "./GlobalComponents/Input";

export default function SingUp () {
    const navigate = useNavigate();

    const [able, setAble] = useState(false);
    const [create_name, setCreate_name] = useState('');
    const [create_email, setCreate_email] = useState('');
    const [create_password, setCreate_password] = useState('');
    const [create_repeatPassword, setCreate_repeatPassword] = useState('');

    function createAccount (e) {
        e.preventDefault();
        setAble(true);

        const data_CreateLogin = {
            name: create_name,
            email: create_email,
            password: create_password,
            repeat_password: create_repeatPassword
        }
    
        const promisse = axios.post("http://localhost:5000/sign-up", data_CreateLogin);
    
        promisse.then(() => {
            setCreate_name('');
            setCreate_email('');
            setCreate_password('');
            setCreate_repeatPassword('');
            navigate('/');
        }).catch(() => {
            setCreate_name('');
            setCreate_email('');
            setCreate_password('');
            setCreate_repeatPassword('');
            alert('Ops! Parece que algo deu errado com a sua requisição.');
            setAble(false);
        });
    }

    return(
        <>
            <Screen>
                <Title>MyWallet</Title>
                <PageForm>
                    <form onSubmit={createAccount}>
                        <Input type="text" placeholder="   Nome" onChange={e => setCreate_name(e.target.value)} value={create_name} required readyOnly={able}></Input>
                        <Input type="email" placeholder="   E-mail" onChange={e => setCreate_email(e.target.value)} value={create_email} required readyOnly={able}></Input>
                        <Input type="password" placeholder="   Senha" onChange={e => setCreate_password(e.target.value)} value={create_password} required readyOnly={able}></Input>
                        <Input type="password" placeholder="   Confirme a senha" onChange={e => setCreate_repeatPassword(e.target.value)} value={create_repeatPassword} required readyOnly={able}></Input>
                        <button type="submit">Cadastrar</button>
                    </form>
                </PageForm>
                <Link to="/"><Text>Já tem uma conta? Entre agora!</Text></Link>
            </Screen>
        </>
    );
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
`;

const Title =  styled.div`
    font-family: 'Saira Stencil One';
    font-weight: 400;
    font-size: 32px;
    line-height: 50.37px;
    color: #FFFFFF;
    text-align: center;
    padding: 95px 0 24px 0;
`;

const PageForm = styled.div`
    width: 100%;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        width: 85%;
        height: 46px;
        border-radius: 5px;
        border: none;
        background-color: #A328D6;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 23.48px;
        color: #FFFFFF;
    }
`;

const Text = styled.div`
    margin: 36px 0 0 0;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    line-height: 17.61px;
    color: #FFFFFF;
    text-align: center;
`;