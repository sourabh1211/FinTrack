import React from 'react';
import styled from 'styled-components';

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    return (
        <ButtonStyled
            style={{
                background: bg || '#0d47a1',             // dark blue
                padding: bPad || '0.9rem 2rem',
                borderRadius: bRad || '10px',
                color: color || '#ffffff',
            }}
            onClick={onClick}
        >
            {icon}
            {name}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    outline: none;
    border: 2px solid transparent;
    font-family: inherit;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.5px;
    padding: 0.6rem 1.2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    color: #ffffff;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #ffffff;
        color: #0d47a1;
        border: 2px solid #0d47a1;
        transform: translateY(-2px);
        box-shadow: 0 0 25px rgba(0, 123, 255, 0.5);
    }

    &:active {
        transform: scale(0.98);
    }
`;


export default Button;
