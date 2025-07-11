import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expense: <span>₹{totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #0d47a1, #000000);
    padding: 2rem 1rem 3rem;
    color: #ffffff;

    h1 {
        text-align: center;
        font-size: 2.5rem;
        color: #64b5f6;
        margin-bottom: 1rem;
        text-shadow: 1px 1px 2px #000;
    }

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        padding: 1rem 2.5rem;
        margin: 2rem auto;
        width: fit-content;
        font-size: 2rem;
        gap: 0.5rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease-in-out;

        span {
            font-size: 2.6rem;
            font-weight: 800;
            color: #00ffcc;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        &:hover {
            transform: scale(1.015);
            box-shadow: 0 0 25px rgba(0, 123, 255, 0.4);
        }
    }

    .income-content {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 2rem;

        .form-container {
            flex: 1;
            min-width: 300px;
        }

        .incomes {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
    }
`;


export default Expenses
