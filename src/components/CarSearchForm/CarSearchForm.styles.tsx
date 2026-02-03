import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 48px 0 16px;
  border: 2px solid #4caf50;
  border-radius: 24px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 1px 6px rgba(76, 175, 80, 0.28);
  &:hover {
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.28);
  }
  &:focus {
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.28);
    border-color: #2e7d32;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #e8f5e8;
  }
  svg {
    width: 20px;
    height: 20px;
    color: #4caf50;
  }
`;
