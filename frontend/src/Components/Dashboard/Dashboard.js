import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1 className="dashboard-title">All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income card">
                                <h2>Total Income</h2>
                                <p>{rupee} {totalIncome()}</p>
                            </div>
                            <div className="expense card">
                                <h2>Total Expense</h2>
                                <p>{rupee} {totalExpenses()}</p>
                            </div>
                            <div className="balance card">
                                <h2>Total Balance</h2>
                                <p>{rupee} {totalBalance()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                        <div className="salary-item card">
                            <p>₹{Math.min(...incomes.map(item => item.amount))}</p>
                            <p>₹{Math.max(...incomes.map(item => item.amount))}</p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span> Max</h2>
                        <div className="salary-item card">
                            <p>₹{Math.min(...expenses.map(item => item.amount))}</p>
                            <p>₹{Math.max(...expenses.map(item => item.amount))}</p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #0d47a1, #000000);
    color: #ffffff;
    padding: 2rem 1rem;

    .dashboard-title {
        font-size: 2.5rem;
        color: #ffffff;
        text-align: center;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px #000;
    }

    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        .chart-con {
            grid-column: 1 / 4;

            .amount-con {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;

                .income,
                .expense {
                    grid-column: span 2;
                }

                .balance {
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    p {
                        color: #00ffcc;
                        font-size: 4rem;
                        font-weight: bold;
                        text-shadow: 0 0 10px #00ffcc;
                    }
                }

                .card {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 16px;
                    padding: 1.5rem;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        transform: scale(1.02);
                        box-shadow: 0 0 25px rgba(0, 123, 255, 0.5);
                    }

                    h2 {
                        font-size: 1.3rem;
                        color: #bbdefb;
                        margin-bottom: 0.6rem;
                    }

                    p {
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: #ffffff;
                    }
                }
            }
        }

        .history-con {
            grid-column: 4 / -1;

            h2 {
                margin: 1.5rem 0 0.8rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #ffffff;
            }

            .salary-title {
                font-size: 1.2rem;
                span {
                    font-size: 1.6rem;
                    color: #64b5f6;
                    text-shadow: 0 0 6px rgba(100, 181, 246, 0.7);
                }
            }

            .salary-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1.5rem;
                background: rgba(0, 0, 0, 0.4);
                backdrop-filter: blur(10px);
                border-radius: 16px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);

                p {
                    font-weight: 600;
                    font-size: 1.5rem;
                    color: #ffffff;
                }
            }

            .card {
                margin-bottom: 1.2rem;
            }
        }
    }
`;



export default Dashboard;
