import { Mail, Undo2 } from "lucide-react";
import {
  FooterProjectsButton,
  FooterProjectsContainer,
  FooterProjectsContent,
  FooterProjectsSpan,
} from "./FooterProjects.styled";

function FooterProjects() {
  const FooterProjectsData = {
    gmail: "giovanarocha365@gmail.com",
  };
  return (
    <FooterProjectsContainer>
      <FooterProjectsButton onClick={() => window.history.back()}>
        <Undo2 />
      </FooterProjectsButton>
      <FooterProjectsContent>
        <FooterProjectsSpan>
          <Mail />
          {FooterProjectsData.gmail}
        </FooterProjectsSpan>
      </FooterProjectsContent>
    </FooterProjectsContainer>
  );
}

export default FooterProjects;
