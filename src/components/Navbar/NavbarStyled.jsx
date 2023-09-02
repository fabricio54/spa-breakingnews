// importando o componente style
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem 1rem;
    /*position: fixed;
    top: 0;*/
    background-color: white;
    z-index: 1;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ImageLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`;

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    i {
        position: absolute;
        top: 1;
        right: .2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: .3rem;
        padding: .5rem;
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.3rem;

        &:focus {
            border: 1px solid #0bade3;
        }
    }
`;

export const Button = styled.button`
    background-color: #0bade3;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: .4rem 1rem;
    color: #fff;
    transition: all .4s ease-in-out;
    cursor: pointer;
    border-radius: .3rem;
    font-family: Roboto, arial;
    /*width: 40%; */
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    /* podemos adicionar configurações como herança para o mesmo componente */
    &:hover {
    background-color: #0a86af;
    }
`;