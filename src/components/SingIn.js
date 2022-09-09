import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./contexts/UserCOntext";
import Input from "./GlobalComponents/Input";

export default function SingIn () {
    const navigate = useNavigate();
    const {setUser_Token, setServer_Data} = useContext(UserContext)

    const [able, setAble] = useState(false);
    const [account_Email, setAccount_Email] = useState([]);
    const [account_Password, setAccount_Password] = useState([]);

    function login (e) {
        e.preventDefault();
        setAble(true);

        const data_Login = {
            email: account_Email,
            password: account_Password
        }

        const promisse = axios.post("http://localhost:5000/sign-in", data_Login);

        promisse.then((res) => {
            setAccount_Email('');
            setAccount_Password('');
            setServer_Data(res.data);
            setUser_Token(res.data.token);
            navigate('/Home');
        }).catch(() => {
            setAccount_Email('');
            setAccount_Password('');
            alert('Ops! Algo deu errado com a sua solicitação, tente novamente');
            setAble(false);
        });
    }

    return(
        <>
            <Screen>
                <Title>MyWallet</Title>
                <PageForm>
                    <form onSubmit={login}>
                        <Input type="email" placeholder="   E-mail" onChange={e => setAccount_Email(e.target.value)} value={account_Email} required readOnly={able}></Input>
                        <Input type="password" placeholder="   Senha" onChange={e => setAccount_Password(e.target.value)} value={account_Password} required readOnly={able}></Input>
                        <button type="submit">Entrar</button>
                    </form>
                </PageForm>
                <Link to="/SingUp"><Text>Primeira vez? Cadastre-se!</Text></Link>
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
    padding: 159px 0 24px 0;
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