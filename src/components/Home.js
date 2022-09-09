import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useContext, useEffect, useState } from "react";
import UserContext from "./contexts/UserCOntext";
import axios from "axios";

function Spents (props) {
    const {id, date, description, value, type, user_Token, reload, setReload} = props;

    function deleteSpent () {
        const answer = window.confirm('Você gostaria de apagar esta transação?');
        if (answer === true) {
            const promisse = axios.delete(`http://localhost:5000/my-wallet/${id}`, {
                headers: {
                    Authorization: `Bearer ${user_Token}`
                }
            });
            promisse.then(() => {
                setReload(!reload);
            }).catch();
        } else {
            return;
        }
    }

    return(
        <>
            {type === 'entrada' ? (
                <Spent>
                    <h1>{date}<en>{description}</en></h1>
                    <LeftSpent>
                        <h2>{value}</h2>
                        <h4 onClick={deleteSpent}>X</h4>
                    </LeftSpent>
                </Spent>
            ): (
                <Spent>
                    <h1>{date}<en>{description}</en></h1>
                    <LeftSpent>
                        <h3>{value}</h3>
                        <h4 onClick={deleteSpent}>X</h4>
                    </LeftSpent>
                </Spent>
            )}
        </>
    );
}

export default function Home () {
    const navigate = useNavigate();
    const {user_Token, server_Data} = useContext(UserContext);

    const [wallet, setWallet] = useState([]);
    const [reload, setReload] = useState(true);

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
    }, [user_Token, navigate, reload])

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
                        wallet.map((value, index) => <Spents key={index} id={value._id} date={value.date} description={value.description} value={value.value} type={value.type} user_Token={user_Token} reload={reload} setReload={setReload}/>)
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
        cursor: pointer;
    }
    en {
        margin: 0 0 0 10px;
        color: #000000;
    }
    h2 {
        color: #03AC00;
    }
    h3 {
        color: #C70000;
    }
`;

const LeftSpent = styled.div`
    display: flex;
    align-items: center;
    h4 {
        color: #C6C6C6;
        margin-left: 11px;
        cursor: pointer;
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
        cursor: pointer;
    }
    p {
        margin: 31px 0 0 0;
    }
`;