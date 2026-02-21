import { FooterButton, FooterContainer } from "./Footer.styles";
import { Eye } from "lucide-react";

function Footer() {
  const FooterDate = {
    text: "Clique aqui para visualizar os meus projetos",
  };

  return (
    <FooterContainer>
      <FooterButton>
        {FooterDate.text}
        <Eye size={16} />
      </FooterButton>
    </FooterContainer>
  );
}

export default Footer;
