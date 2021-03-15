import { Link } from "react-router-dom";
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 18rem;
    height: 25rem;
    background: #cd853f;
    display: grid;
    align-items:center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) =>(isOpen ? "1" : "0")};
    top: ${({isOpen}) =>(isOpen ? "0" : "-100")};

    @media screen and (max-width: 768px) {
       height: 60%;
       width: 13rem;
    }
`;

export const Icon = styled.div`
    position:absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 768px) {
       font-size: 1.3rem;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

export const DropdownWrapper = styled.div``

export const DropdownMenu = styled.div`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(4, 70px);
    text-align: center;
    
    @media screen and (max-width: 768px){
        grid-template-rows: repeat(4, 50px);
        margin-top: 3rem;
    }
`;

export const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        padding-top: 4rem;
        
    }

    &:hover {
        color: #000d1a;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    font-size: small;

    @media screen and (max-width: 768px) {
        width: 60%;
        margin: 3rem 20% 2rem 20%;
    }    
`;
