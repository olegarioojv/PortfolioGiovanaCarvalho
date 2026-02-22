import { useNavigate } from "react-router-dom";
import { FooterButton, FooterContainer } from "./Footer.styles";
import { Eye } from "lucide-react";

function Footer() {
  const navigate = useNavigate();

  const FooterData = {
    text: "Clique aqui para visualizar os meus projetos",
  };

  return (
    <FooterContainer>
      <FooterButton onClick={() => navigate("/projects")}>
        {FooterData.text}
        <Eye size={16} />
      </FooterButton>
    </FooterContainer>
  );
}

export default Footer;
