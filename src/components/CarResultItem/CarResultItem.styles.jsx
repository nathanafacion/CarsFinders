import styled from 'styled-components';

export const Item = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(76, 175, 80, 0.10), 0 1.5px 6px rgba(44, 62, 80, 0.08);
  padding: 24px 28px;
  margin-bottom: 24px;
  transition: box-shadow 0.2s, transform 0.2s;
  border: 1.5px solid #e0f2f1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  &:hover {
    box-shadow: 0 8px 32px rgba(76, 175, 80, 0.18), 0 2px 8px rgba(44, 62, 80, 0.12);
    transform: translateY(-2px) scale(1.01);
    border-color: #4caf50;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #1b5e20;
  font-weight: 600;
  margin-bottom: 2px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Details = styled.div`
  color: #5f6368;
  font-size: 1rem;
  margin-bottom: 2px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Label = styled.span`
  font-weight: 500;
  color: #388e3c;
  margin-right: 4px;
`;

export const Value = styled.span`
  color: #333;
  font-weight: 400;
`;

export const Price = styled.span`
  color: #388e3c;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 8px;
  letter-spacing: 0.5px;
  background: #e8f5e9;
  border-radius: 8px;
  padding: 4px 12px;
`;
