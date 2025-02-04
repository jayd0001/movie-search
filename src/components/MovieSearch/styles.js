import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 8px 16px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const PageButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 16px;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.isActive ? "white" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#0056b3" : "#e0e0e0")};
  }
`;
