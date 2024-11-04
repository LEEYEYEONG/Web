import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const InfoSpan = styled.span`
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 320px;
  padding: 10px;
  margin-top: 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: -10px;
  margin-bottom: 10px;
`;