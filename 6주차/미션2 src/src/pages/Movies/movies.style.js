import styled from "styled-components";

export const MoviesContainer = styled.div`
    background-color: black;
    color: white;
    margin-left: 135px;
    margin-top: -7px;
    height: 90.2vh;
`;

export const InfoSpan = styled.span`
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    margin-left: 20px;
    letter-spacing: 1px;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  gap: 10px; /* 이미지 사이의 간격을 조정 */

  img {
    flex: 1; /* 이미지가 컨테이너의 크기에 맞게 조정되도록 설정 */
    height: auto; /* 높이를 자동으로 조정 */
    max-width: 100%; /* 이미지가 컨테이너를 넘지 않도록 설정 */
    object-fit: cover; /* 이미지가 요소를 채우도록 설정 */
    border-radius: 10px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px; 

  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

export const ImgContainer2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  
  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

export const ImgContainer3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  
  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

export const ImgContainer4 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  
  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

export const ImageTitle = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
`;