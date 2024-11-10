import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 6rem;
  height: 96vh;
  padding: 20px;
  background-color: #262626;
  color: white;
  z-index: 0;
`;

export const List = styled.ol`
  list-style-type: none;
  padding: 0;
  margin-top: 70px;
  margin-left: -10px;
`;

export const ListItem = styled.li`
  padding: 0.5rem 1rem;
  margin: 10px 0;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;