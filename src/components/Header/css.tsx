import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #eeeeee;
  font-weight: bold;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Text = styled.p`
  font-size: 15.5px;
  color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const Li = styled.li`
  font-size: 15.5px;
  color: #eeeeee;
  margin: 0 25px 0 10px;
  font-family: sans-serif;
  list-style: none;
  cursor: pointer;
`;

export const A = styled.a`
  text-decoration: none;
  font-size: 15.5px;
  color: #eeeeee;
`;