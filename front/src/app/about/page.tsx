"use client";

import Link from "next/link";
import {
  AboutContainer,
  Container,
  EndText,
  MainText,
  SubText1,
  SubText2,
  Title,
} from "./About.styles";

const About: React.FC = (): JSX.Element => {
  return (
    <Container>
      <AboutContainer>
        <Title>Sobre el proyecto</Title>
        <MainText>
          Este es un proyecto de Front-End del Modulo 4 para SoyHenry
        </MainText>
        <SubText1>
          Esta aplicación es un e-commerce de productos tecnológicos, la misma
          ofrece una gran variedad de productos. El objetivo es que el usuario
          tenga una navegación sencilla y amigable.
        </SubText1>
        <SubText2>
          El usuario puede navegar a travez de la barra de navegación y ver los
          productos disponibles. Puede agregarlos al carrito de compras pero
          para ello primero debe iniciar sesión o registrarse. También puede ver
          el historial de compras o pedidos que ha realizado.
        </SubText2>
        <EndText>
          Creado por{" "}
          <Link
            className="hover:text-secondaryColor"
            href="https://linkedin.com/in/heredialucas1/"
            target="_blank"
          >
            Lucas Heredia
          </Link>
        </EndText>
      </AboutContainer>
    </Container>
  );
};

export default About;
