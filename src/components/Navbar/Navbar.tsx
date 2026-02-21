import { NavbarContainer, Title } from "./Navbar.styles";

function Navbar() {
  const navbarData = [
    {
      title: "| Portfólio de Dashboard - Giovana Carvalho",
    },
  ];

  return (
    <NavbarContainer>
      {navbarData.map((navbarTitle, e) => (
        <Title key={e}>{navbarTitle.title}</Title>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
