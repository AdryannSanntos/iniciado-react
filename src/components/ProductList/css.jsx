import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
`;

export const Product = styled.div`
  background-color: white;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #111111;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-size: 15.5px;
  color: #111111;
  text-transform: capitalize;
  font-family: sans-serif;
`;