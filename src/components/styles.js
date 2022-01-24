import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        position: relative;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: inherit;
        text-decoration: none;
        line-height: 1.75;
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-image: linear-gradient(to bottom right, #6100FF, #2395FF);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 100% auto;
        background-attachment: fixed;
        height: 100vh;
    }
`
export const Div = styled.div`
    max-width: 1200px;
    width: 100%;
    color: #f1f1f1;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 3.2rem;
    overflow: hidden;
    margin: 2rem;

    @media(max-width: 465px) {
        font-size: 2.5rem;
    }
`;

export const FormContent = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 2rem;

    @media(max-width: 465px) {
        display: block;
    }

    input {
        max-width: 600px;
        width: 100%;
        color: #333;
        font-family: 'Poppins',sans-serif;
        font-size: 1rem;
        padding: 1rem 1.5rem;
        border-radius: 0.2rem;
        background-color: rgb(255,255,255);
        border: none;
        margin-right: 1.5rem;

        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }

        @media(max-width: 465px) {
            margin-right: 0;
        }
    }

    button {
        color: white;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        padding: 1rem 2rem;
        border-radius: 0.2rem;
        border: 2px solid #2395FF;
        background: #2395FF;
        cursor: pointer;
        opacity: 1;

        &:hover {
            opacity: 0.9;
            transition: 0.5s;
        }

        @media(max-width: 465px) {
            width: 100%;
            margin-top: 1rem;
        }
    }
`;
export const ListItens = styled.ul`
    max-width: 830px;
    width: 100%;
    margin: 0 auto;
`;

export const Item = styled.li`
    background: #f1f1f1;
    margin: 2rem;
    padding: 1rem 1.5rem;
    border-radius: 0.2rem;
    text-align: left;
    color: #2395FF;
    font-size: 1rem;
    font-weight: 500;
    overflow: hidden;
`;