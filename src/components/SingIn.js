import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "./GlobalComponents/Input";

export default function SingIn () {
    return(
        <>
            <Screen>
                <Title>MyWallet</Title>
                <PageForm>
                    <form>
                        <Input type="email" placeholder="   E-mail"></Input>
                        <Input type="password" placeholder="   Senha"></Input>
                        <button>Entrar</button>
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