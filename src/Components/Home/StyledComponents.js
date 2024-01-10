import styled from "styled-components";

export const CountryCard = styled.div`
  background-image: URL(${(props) => props.url});
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 7px;
`;

export const CountryName = styled.p`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 5px;
  margin: 6px;
`;
