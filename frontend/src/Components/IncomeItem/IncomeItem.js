import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, rupee, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{rupee} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 1.25rem 1.75rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    color: #ffffff;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 25px rgba(0, 123, 255, 0.5);
    }

    .icon {
        width: 70px;
        height: 70px;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.2);

        i {
            font-size: 2.3rem;
            color: #64b5f6;
            text-shadow: 0 0 10px rgba(100, 181, 246, 0.5);
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        h5 {
            font-size: 1.4rem;
            font-weight: 600;
            padding-left: 2rem;
            position: relative;
            color: #ffffff;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background: ${props => props.indicator || '#00ffcc'};
                box-shadow: 0 0 6px ${props => props.indicator || '#00ffcc'};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;

            .text {
                display: flex;
                flex-direction: column;
                gap: 0.4rem;
                color: #ffffff;

                p {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-size: 0.95rem;
                    color: #bbdefb;
                    opacity: 0.85;
                }
            }
        }
    }
`;




export default IncomeItem