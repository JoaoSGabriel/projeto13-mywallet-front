import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

export default function Home () {
    return(
        <>
            <Screen>
                <Title>
                    <p>Olá, Fulano</p>
                    <IoExitOutline />
                </Title>
                <Wallet></Wallet>
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
    justify-content: center;
    margin: 0 auto;
    padding: 25px 0 0 0;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 30.52px;
    text-align: center;
    color: #FFFFFF;
    p {
        margin-right: 170px;
    }
`;

const Wallet = styled.div`
    width: 90%;
    height: 446px;
    background-color: #FFFFFF;
    margin: 22px auto 0 auto;
    overflow-y: scroll;
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