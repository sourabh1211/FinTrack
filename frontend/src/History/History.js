import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext();
    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            <div className="history-list">
                {history.map((item) => {
                    const { _id, title, amount, type } = item;
                    return (
                        <div key={_id} className="history-item">
                            <p className={`title ${type}`}>{title}</p>
                            <p className={`amount ${type}`}>
                                {type === 'expense'
                                    ? `-₹${amount <= 0 ? 0 : amount}`
                                    : `+₹${amount <= 0 ? 0 : amount}`}
                            </p>
                        </div>
                    );
                })}
            </div>
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    padding: 2rem;
    background: linear-gradient(135deg, rgba(13, 71, 161, 0.1), rgba(0, 0, 0, 0.3));
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    color: #ffffff;
    width: 100%;
    transition: all 0.3s ease-in-out;

    h2 {
        font-size: 2.2rem;
        color: #00ffcc;
        margin-bottom: 1.5rem;
        text-align: center;
        text-shadow: 0 0 6px rgba(0, 255, 204, 0.4);
    }

    .history-list {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .history-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(12px);
        transition: all 0.3s ease-in-out;

        .title,
        .amount {
            font-size: 1.1rem;
            font-weight: 600;
            color: #e0f7ff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .income {
            color: #00ff99;
            text-shadow: 0 0 4px rgba(0, 255, 153, 0.3);
        }

        .expense {
            color: #ff4c4c;
            text-shadow: 0 0 4px rgba(255, 76, 76, 0.3);
        }

        &:hover {
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(0, 255, 204, 0.3);
        }
    }
`;


export default History;
