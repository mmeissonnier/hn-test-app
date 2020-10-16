import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return <Title>My page</Title>;
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
