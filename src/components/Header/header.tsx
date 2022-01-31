import {
  Container,
  Title,
  MainContainer,
  Flex,
  Text,
  Ul,
  Li,
  A
} from './css'; 

export function Header(){
  return (
    <Container>
      <Flex>
        <MainContainer>
          <Title>Title</Title>
          <Ul>
            <Li><A href='/'>Home</A></Li>
            <Li><A href='/Cart'>Cart</A></Li>
            <Li><A href='/Catalog'>Catalog</A></Li>
          </Ul>
        </MainContainer>
      </Flex>
    </Container>
  );
}