import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { NavItems, ButtonOpen, ButtonClose } from "./Navbar.styles";
import { HeaderContainer, Item } from "./Navbar.styles.tailwind";

const Navbar = () => {
  const navRef = React.useRef<HTMLElement>(null);

  const showNavbar = () => {
    navRef.current!.classList.toggle("responsive_nav");
  };

  return (
    <HeaderContainer style={{ color: "var(--mainColorLight)" }}>
      <ButtonClose>
        <FaBars
          className="px-2 text-[24px] w-auto h-auto"
          style={{ color: "var(--mainColorLight)" }}
        />
      </ButtonClose>
      <NavItems className="flex items-center" ref={navRef}>
        <ButtonOpen className="cursor-default">
          <FaTimes
            className="px-2 text-[24px] w-auto h-auto cursor-default"
            style={{ color: "var(--mainColorLight)" }}
          />
        </ButtonOpen>
        <Item>
          <Link href="/home">Inicio</Link>
        </Item>
        <Item>
          <Link href="/products">Productos</Link>
        </Item>
        <Item>
          <Link href="/about">Sobre Nosotros</Link>
        </Item>
        <Item>
          <Link href="/contact">Contacto</Link>
        </Item>
        <ButtonOpen onClick={showNavbar}>
          <FaTimes className="px-2 text-[24px] w-auto h-auto" />
        </ButtonOpen>
      </NavItems>
      <ButtonClose onClick={showNavbar}>
        <FaBars className="px-2 text-[24px] w-auto h-auto" />
      </ButtonClose>
    </HeaderContainer>
  );
};

export default Navbar;
