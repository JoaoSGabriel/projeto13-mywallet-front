import styled from "styled-components";
import Input from "./GlobalComponents/Input";

export default function NewEntry () {
    return(
        <>
            <Screen>
                <Title>Nova Saída</Title>
                <form>
                    <Input placeholder="   Valor"></Input>
                    <Input placeholder="   Descrição"></Input>
                    <button type="submit">Salvar saída</button>
                </form>
            </Screen>
        </>
    );
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0 0 0;
    }
    button {
        width: 87%;
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

const Title = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 25px 0 0 0;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 30.52px;
    text-align: start;
    color: #FFFFFF;
`;