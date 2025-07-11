import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  gap: 1rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--blue-dark));
  backdrop-filter: blur(10px);
  color: var(--text-color);
  font-family: 'Nunito', sans-serif;
  font-size: 0.95rem;
`;

export const InnerLayout = styled.div`
  padding: 1.5rem 1.25rem;
  width: 100%;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  font-size: 0.95rem;
`;
