import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Signup() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch("https://fintrack-22qv.onrender.com/api/v1/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, name, email, password }),
        });

        let data = await res.json();

        if (data.success === true) {
            alert("Registration Successful");
            navigate("/login");
        } else {
            setError(data.message);
            alert(data.message);
        }
    };

    return (
        <SignupStyled>
            <div className="signup-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h3 className="title">Signup</h3>
                    <div className="inputBox">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="inputBox">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="inputBox">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="inputBox">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="btnBig">Signup</button>
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="signup-link">Login</Link>
                    </p>
                </form>
            </div>
        </SignupStyled>
    );
}

const SignupStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #0d47a1, #000000);
    animation: fadeIn 1.2s ease-in;

    .signup-container {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        padding: 3rem;
        width: 500px;
        transition: all 0.4s ease-in-out;

        &:hover {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(0, 255, 204, 0.4);
        }

        .signup-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;

            .title {
                font-size: 2.5rem;
                font-weight: bold;
                color: #00ffcc;
                text-shadow: 0 0 6px rgba(0, 255, 204, 0.4);
            }

            .inputBox {
                width: 100%;

                input {
                    width: 100%;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.85);
                    border: 1.5px solid #00ffcc;
                    border-radius: 10px;
                    font-size: 1.1rem;
                    color: #0a0a0a;
                    transition: all 0.3s ease;

                    &:focus {
                        border-color: #1e90ff;
                        background: #fff;
                        outline: none;
                        box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
                    }
                }
            }

            .btnBig {
                padding: 0.9rem 2rem;
                background: #00ffcc;
                color: #000000;
                font-size: 1.1rem;
                font-weight: bold;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                letter-spacing: 0.5px;
                box-shadow: 0 6px 15px rgba(0, 255, 204, 0.3);

                &:hover {
                    background: #ffffff;
                    color: #00cc99;
                    border: 2px solid #00cc99;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 255, 204, 0.4);
                }
            }

            p {
                font-size: 1rem;
                color: #cfd8dc;
                margin-top: 1rem;

                .signup-link {
                    color: #64b5f6;
                    text-decoration: underline;
                    font-weight: 600;
                    transition: 0.3s;

                    &:hover {
                        color: #00bfff;
                    }
                }
            }
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;


export default Signup;
