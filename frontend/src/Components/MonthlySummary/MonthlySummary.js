import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';

function MonthlySummary() {
    const { incomes, expenses, getIncomes, getExpenses } = useGlobalContext();
    const [monthlyData, setMonthlyData] = useState([]);

    useEffect(() => 
    {
        getIncomes();
        getExpenses();
    }, 
    [getIncomes, getExpenses]);

    useEffect(() => {
        const groupedData = groupByMonth(incomes, expenses);
        setMonthlyData(groupedData);
       console.log("hi")
        console.log(monthlyData)
        
    }, [incomes, expenses]);

    
    const groupByMonth = (incomes, expenses) => {
        const data = {};

        
        [...incomes, ...expenses].forEach(item => {
            const month = new Date(item.date).toLocaleString('default', { month: 'long', year: 'numeric' });
           

            if (!data[month]) {
                data[month] = { income: 0, expense: 0 };
            }

            
            if (item.type === 'income') {
                data[month].income += item.amount;
            } else if (item.type === 'expense') {
                data[month].expense += item.amount;
            }
        });

        return Object.entries(data).map(([month, { income, expense }]) => ({
            month,
            income,
            expense,
        }));
    };

    return (
        <SummaryStyled>
            <InnerLayout>
                <h1>Monthly Summary</h1>
                <div className="summary-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Total Income</th>
                                <th>Total Expense</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyData.map(({ month, income, expense }) => (
                                <tr key={month}>
                                    <td>{month}</td>
                                    <td>₹{income}</td>
                                    <td>₹{expense}</td>
                                    <td>₹{income - expense}</td>  {/* Balance calculated as income - expense */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </InnerLayout>
        </SummaryStyled>
    );
}

const SummaryStyled = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #0d47a1, #000000);
    padding: 3rem 2rem;
    color: #ffffff;

    h1 {
        text-align: center;
        font-size: 2.5rem;
        color: #64b5f6;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px #000;
    }

    .summary-table {
        overflow-x: auto;
        margin-top: 2rem;

        table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            transition: all 0.3s ease-in-out;

            th,
            td {
                padding: 1rem 1.2rem;
                text-align: center;
                font-size: 1.1rem;
                color: #e0f7ff;
            }

            th {
                background: rgba(255, 255, 255, 0.15);
                font-weight: 600;
                color: #00ffcc;
                text-shadow: 0 0 5px rgba(0, 255, 204, 0.4);
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }

            td {
                background: rgba(255, 255, 255, 0.05);
                border-top: 1px solid rgba(255, 255, 255, 0.08);
                transition: background 0.3s ease;
                color: #ffffff;
                font-weight: 500;
            }

            tr:nth-child(even) td {
                background: rgba(255, 255, 255, 0.04);
            }

            tr:hover td {
                background: rgba(255, 255, 255, 0.08);
            }

            tr:last-child td {
                border-bottom: none;
            }
        }
    }
`;




export default MonthlySummary;
