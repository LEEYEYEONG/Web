// card.style.js
import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 15px;
  margin: 2px;
  width: 6rem; /* 카드의 넓이 설정 */
  text-align: center;
  position: relative;
`;

export const MovieImage = styled.img`
  width: 120%;
  height: auto;
  border-radius: 4px;
`;

export const MovieTitle = styled.h2`
  font-size: 1rem;
  margin: 8px 0;
  color:white;
`;

export const MovieOverview = styled.p`
  font-size: 1rem;
  color: #666;
  color:white;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;

  /* 카드에 호버 시 오버레이가 보이도록 설정 */
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;
