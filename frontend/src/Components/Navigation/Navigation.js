import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import { useNavigate } from 'react-router-dom';

function Navigation({ active, setActive }) {
    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.clear(); // Clear all localStorage items
        navigate('/login'); // Redirect to the login route
    };

    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>{name}</h2>
                    <p>{username}</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <div className="bottom-nav">
                <li onClick={handleSignOut} style={{ cursor: 'pointer', textDecoration:'underline' }}>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 310px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;

    .user-con {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #00ffcc;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 15px rgba(0, 255, 204, 0.3);
        }

        .text {
            h2 {
                font-size: 1.4rem;
                color: #00ffcc;
                text-shadow: 0 0 5px rgba(0, 255, 204, 0.4);
            }

            p {
                color: #e0f7ff;
                font-size: 0.9rem;
                opacity: 0.8;
            }
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

        li {
            display: grid;
            grid-template-columns: 30px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            color: #bbdefb;
            font-size: 1.05rem;
            padding: 0.6rem 1rem;
            border-radius: 12px;
            transition: all 0.3s ease;

            i {
                font-size: 1.3rem;
                color: #bbdefb;
                transition: all 0.3s ease;
            }

            &:hover {
                background: rgba(100, 181, 246, 0.1);
                color: #ffffff;

                i {
                    color: #64b5f6;
                }
            }
        }

        .active {
            background: rgba(100, 181, 246, 0.15);
            color: #ffffff;
            font-weight: 600;
            position: relative;

            i {
                color: #64b5f6;
            }

            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 4px;
                background-color: #64b5f6;
                border-radius: 0 6px 6px 0;
            }
        }
    }

    .bottom-nav {
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);

        li {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-weight: 500;
            color: #ff4d4d;
            font-size: 1.05rem;
            cursor: pointer;
            padding-left: 0.2rem;
            transition: all 0.3s ease;

            i {
                font-size: 1.2rem;
                color: #ff4d4d;
            }

            &:hover {
                color: #ff6a6a;

                i {
                    color: #ff6a6a;
                }
            }
        }
    }
`;




export default Navigation;
