import styled from 'styled-components';

export const NavbarContainer = styled.div`
  justify-content: space-between;  
  display: flex;
  z-index: 1;
  background-color: black;
  position: relative;
  align-items: center;
  top: -7.8px;
  left: -8.5px;
  width: 100%;
  height: 5rem;   
  padding: 0 15px; 
`;

export const NavbarTitle = styled.span`
  color: #ff4d4d;
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.span`
  width: auto;
  gap: 10px;
  position: relative;
  display:flex;
  margin-right:20px;
`;

export const Button1 = styled.button`
    &:hover {
        background-color:#4d4d4d;
	}
  white-space: nowrap;
  padding: 10px 20px;
  background-color: #333333;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const Button2 = styled.button`
    &:hover {
        background-color:#4d4d4d;
	}
  white-space: nowrap;
  padding: 10px 20px;
  background-color: #ff4d4d;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;