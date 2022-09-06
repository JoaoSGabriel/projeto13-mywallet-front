import styled from "styled-components";

export default function Input ({...others}) {
    return(
        <Heaped {...others}></Heaped>
    );
}

const Heaped = styled.input`
    width: 85%;
    height: 45px;
    margin: 0 0 13px 0;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    line-height: 23.48px;
    color: #000000;
    :focus {
        outline: 0;
    }
`;