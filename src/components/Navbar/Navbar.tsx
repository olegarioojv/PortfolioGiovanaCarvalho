import { NavbarContainer, Title } from "./Navbar.styles";

function Navbar() {
  const navbarData = {
    title: "| Portfólio de Dashboard - Giovana Carvalho",
  };

  return (
    <NavbarContainer>
      <Title>{navbarData.title}</Title>
    </NavbarContainer>
  );
}

export default Navbar;
