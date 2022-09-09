import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useContext, useEffect, useState } from "react";
import UserContext from "./contexts/UserCOntext";
import axios from "axios";

function Spents (props) {
    const {date, description, value, type} = props;

    return(
        <>
            {type === 'entrada' ? (
                <Spent>
                    <h1>{date}<en>{description}</en></h1>
                    <h2>{value}</h2>
                </Spent>
            ): (
                <Spent>
                    <h1>{date}<en>{description}</en></h1>
                    <h3>{value}</h3>
                </Spent>
            )}
        </>
    );
}

export default function Home () {
    const navigate = useNavigate();
    const {user_Token, server_Data} = useContext(UserContext);

    const [wallet, setWallet] = useState([]);

    useEffect(() => {
        const promisse = axios.get('http://localhost:5000/my-wallet', {
            headers: {
                Authorization: `Bearer ${user_Token}`
            }
        });
        
        promisse.then((res) => {
            setWallet(res.data);
        }).catch(() => {
            navigate('/');
        });
    }, [user_Token, navigate])

    return(
        <>
            <Screen>
                <Title>
                    <p>olá, {server_Data.name}</p>
                    <IoExitOutline />
                </Title>
                <Wallet>
                    {wallet.length === 0 ? (
                        <p>Não há registros de<br/>entrada ou saída</p>
                    ) : (
                        wallet.map((value, index) => <Spents key={index} date={value.date} description={value.description} value={value.value} type={value.type}/>)
                    )}
                </Wallet>
                <Buttons>
                    <Link to="/NewEntry">
                    <div>
                        <AiOutlinePlusCircle />
                        <p>Nova<br/>entrada</p>
                    </div>
                    </Link>
                    <Link to="/NewOutPut">
                    <div>
                        <AiOutlineMinusCircle />
                        <p>Nova<br/>saída</p>
                    </div>
                    </Link>
                </Buttons>
            </Screen>
        </>
    );
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
`;

const Title = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 25px 0 0 0;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 30.52px;
    text-align: center;
    color: #FFFFFF;
    
`;

const Wallet = styled.div`
    width: 90%;
    height: 446px;
    background-color: #FFFFFF;
    margin: 22px auto 0 auto;
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    p {
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23.52px;
        text-align: center;
        color: #868686;
        margin: 200px 0 0 0;
    }
`;

const Spent = styled.div`
    width: 90%;
    margin: 12px auto 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 18.78px;
    h1 {
        color: #C6C6C6;
    }
    en {
        margin: 0 0 0 10px;
        color: #000000;
    }
    h2 {
        color: #03AC00;
        display: flex;
        align-items: center;
    }
    h3 {
        color: #C70000;
        display: flex;
        align-items: center;
    }
`;

const Buttons = styled.div`
    width: 90%;
    margin: 13px auto 0 auto;
    display: flex;
    justify-content: space-between;
    a{
        text-decoration: none;
    }
    div {
        width: 150px;
        height: 105px;
        padding: 10px 0 0 10px;
        background-color: #A328D6;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
    p {
        margin: 31px 0 0 0;
    }
`;