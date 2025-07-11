import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(13, 71, 161, 0.15), rgba(0, 0, 0, 0.4));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    color: #ffffff;

    input,
    textarea,
    select {
        font-family: inherit;
        font-size: 1rem;
        outline: none;
        padding: 0.75rem 1rem;
        border-radius: 10px;
        border: 1.5px solid #64b5f6;
        background: rgba(255, 255, 255, 0.85);
        color: #0a0a0a;
        transition: all 0.3s ease;

        &::placeholder {
            color: rgba(0, 0, 0, 0.4);
        }

        &:focus {
            border-color: #1e90ff;
            background: #ffffff;
            box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
        }
    }

    .input-control {
        input,
        textarea {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            width: 100%;
            color: #333;

            &:focus {
                color: #000;
            }
        }
    }

    .submit-btn {
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        button {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid transparent;
            border-radius: 12px;
            padding: 0.6rem 1.4rem;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease-in-out;
            backdrop-filter: blur(10px);

            &:hover {
                background: #ffffff;
                color: #0d47a1;
                border: 2px solid #0d47a1;
                transform: translateY(-2px);
                box-shadow: 0 0 25px rgba(0, 123, 255, 0.5);
            }
        }
    }

    .error {
        color: #ff4d4f;
        font-weight: bold;
        background: rgba(255, 0, 0, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 10px;
        text-align: center;
    }
`;



export default Form