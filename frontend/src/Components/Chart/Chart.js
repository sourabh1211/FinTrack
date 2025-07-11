import React from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map(({ amount }) => amount),
                borderColor: 'rgba(0, 255, 127, 0.8)',
                backgroundColor: 'rgba(0, 255, 127, 0.2)',
                tension: 0.3,
                fill: true,
            },
            {
                label: 'Expenses',
                data: expenses.map(({ amount }) => amount),
                borderColor: 'rgba(255, 99, 132, 0.8)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.3,
                fill: true,
            },
        ],
    };

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: linear-gradient(135deg, rgba(13, 71, 161, 0.4), rgba(0, 0, 0, 0.4));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
    animation: fadeIn 0.6s ease-in-out;
    transition: all 0.3s ease-in-out;
    color: #ffffff;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 30px rgba(0, 140, 255, 0.4);
    }

    canvas {
        max-height: 400px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;



export default Chart;
