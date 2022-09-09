import axios from "axios";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./contexts/UserCOntext";
import Input from "./GlobalComponents/Input";

export default function NewEntry () {
    const navigate = useNavigate();
    const {user_Token} = useContext(UserContext)

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [able, setAble] = useState(false);

    function saveSpent (e) {
        e.preventDefault();
        setAble(true);

        const register = {
            date: dayjs().format('DD/MM'),
            description: description,
            value: value,
            type: 'entrada'
        }

        const promisse = axios.post("http://localhost:5000/new-spent", register, {
            headers: {
                Authorization: `Bearer ${user_Token}`
            }
        });

        promisse.then(() => {
            setValue('');
            setDescription('');
            navigate('/Home');
        }).catch(() => {
            setValue('');
            setDescription('');
            alert('Ops! Parece que algo deu errado com a sua solicitação.')
            setAble(false);
        })
    }

    return(
        <>
            <Screen>
                <Title>Nova Entrada</Title>
                <form onSubmit={saveSpent}>
                    <Input type="number" placeholder="   Valor" onChange={e => setValue(e.target.value)} value={value} required readOnly={able}></Input>
                    <Input type="text" placeholder="   Descrição" onChange={e => setDescription(e.target.value)} value={description} required readOnly={able}></Input>
                    <button type="submit">Salvar entrada</button>
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