import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
    const { width, height } = useWindowSize();

    const moveOrb = keyframes`
        0% {
            transform: translate(0, 0) scale(1);
        }
        50% {
            transform: translate(${width / 3}px, ${height / 4}px) scale(1.1);
        }
        100% {
            transform: translate(0, 0) scale(1);
        }
    `;

    const OrbStyled = styled.div`
        position: absolute;
        top: -10%;
        left: -10%;
        width: 65vh;
        height: 65vh;
        border-radius: 50%;
        background: radial-gradient(circle at 40% 40%, #00ffcc, #0d47a1, #000000);
        filter: blur(250px);
        opacity: 0.5;
        pointer-events: none;
        animation: ${moveOrb} 25s ease-in-out infinite alternate;

        @media (max-width: 768px) {
            width: 45vh;
            height: 45vh;
            filter: blur(180px);
        }
    `;

    return <OrbStyled />;
}

export default Orb;
