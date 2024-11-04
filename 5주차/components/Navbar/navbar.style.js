import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: relative;
  top: -40px;
  left: -40px;
  width: 100%;
  height: 5rem;
  z-index: 1;
  background-color: black;
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  padding: 0 20px; 
  box-sizing: border-box;
`;

export const NavbarTitle = styled.span`
  color: #ff4d4d;
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.span`
  display: flex;
  gap: 10px; /* 버튼 사이의 간격 */
  margin-left: auto; /* 오른쪽 끝으로 이동 */
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