import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: white;
  padding: 3rem;
  border-radius: 0.25rem;
  border-width: 2px;
  border-color: rgb(122, 139, 238);
  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 640px) {
    margin: 2rem 0;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-decoration: underline;
  &:hover {
    color: rgb(219, 43, 57);
  }
`;

const MainText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SubText1 = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const SubText2 = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const EndText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export {
  Container,
  AboutContainer,
  Title,
  MainText,
  SubText1,
  SubText2,
  EndText,
};
