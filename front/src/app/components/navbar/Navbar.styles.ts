import styled from "styled-components";
const NavItems = styled.nav`
  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: -100vh;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: var(--mainColor);
    transition: 1s;
    &.responsive_nav {
      background-color: var(--mainColorLight);
      transform: translateY(100vh);
    }
  }
`;
const ButtonOpen = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: var(--textColor);
  visibility: hidden;
  opacity: 0;
  font-size: 1.5rem;
  @media only screen and (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }
`;
const ButtonClose = styled(ButtonOpen)`
  @media only screen and (max-width: 1024px) {
    top: 2rem;
    right: 2rem;
  }
`;

export { NavItems, ButtonOpen, ButtonClose };
