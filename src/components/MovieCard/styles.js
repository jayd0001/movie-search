import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 19.2px; 
  margin-bottom: 8px;
`;

export const Summary = styled.p`
  font-size: 14.4px;
  color: #666;
`;
