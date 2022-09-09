import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./contexts/UserCOntext";
import Input from "./GlobalComponents/Input";

export default function NewEntry () {
    const navigate = useNavigate();
    const params = useParams();
    const {user_Token} = useContext(UserContext)
    const {id} = params;

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [able, setAble] = useState(false);

    function saveSpent (e) {
        e.preventDefault();
        setAble(true);

        const register = {
            description: description,
            value: value
        }

        const promisse = axios.put(`http://localhost:5000/my-wallet/${id}`, register, {
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
                <Title>Editar Saída</Title>
                <form onSubmit={saveSpent}>
                    <Input type="number" placeholder="   Valor" onChange={e => setValue(e.target.value)} value={value} required readOnly={able}></Input>
                    <Input type="text" placeholder="   Descrição" onChange={e => setDescription(e.target.value)} value={description} required readOnly={able}></Input>
                    <button type="submit">Atualizar saída</button>
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