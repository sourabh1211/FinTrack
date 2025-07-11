import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    transition: all 0.3s ease-in-out;
  }

  :root {
    --primary-blue: #0D47A1;
    --blue-dark: #000000;
    --blue-mid: #0B3D91;
    --blue-light: #1976D2;
    --accent-blue: #64B5F6;
    --glow-blue: rgba(100, 181, 246, 0.6);
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.15);
    --text-color: #ffffff;
    --green: #00ff99;
    --red: #ff4d4d;
    --hover-zoom: scale(1.05);
    --shadow-glow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    background: linear-gradient(135deg, var(--primary-blue), var(--blue-dark));
    color: var(--text-color);
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-color);
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: var(--accent-blue);
    transform: var(--hover-zoom);
    text-shadow: 0 0 10px var(--glow-blue);
  }

  button, .glow {
    background-color: var(--blue-light);
    color: white;
    border: none;
    padding: 0.6rem 1.3rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 6px 15px var(--glow-blue);
    transition: all 0.3s ease-in-out;
  }

  button:hover, .glow:hover {
    background: #ffffff;
    color: var(--blue-light);
    transform: translateY(-2px);
    border: 2px solid var(--blue-light);
    box-shadow: 0 8px 25px var(--glow-blue);
  }

  .error {
    color: var(--red);
    font-weight: bold;
    background: rgba(255, 0, 0, 0.1);
    padding: 0.6rem 1rem;
    border-radius: 10px;
    text-align: center;
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(6px); }
    50% { transform: translateX(-6px); }
    75% { transform: translateX(6px); }
    100% { transform: translateX(0); }
  }

  input, textarea, select {
    padding: 0.75rem 1rem;
    border: 1.5px solid var(--glass-border);
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-color);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: var(--accent-blue);
    box-shadow: 0 0 15px var(--glow-blue);
    transform: var(--hover-zoom);
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--accent-blue);
    border-radius: 10px;
  }
`;
