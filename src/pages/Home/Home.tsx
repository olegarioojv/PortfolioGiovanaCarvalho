//components
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

//styles
import {
  AboutButton,
  Buttons,
  Content,
  Description,
  Greeting,
  Hero,
  HeroContainer,
  ImageContainer,
  Profile,
  ProjectButton,
  Title,
} from "./Home.styles";

// Icons
import { User, Eye } from "lucide-react";

// Img
import profileImg from "../../assets/img/profile.jpeg";

function Home() {
  const heroData = {
    greeting: "Olá! Meu nome é",
    title: "Giovana Carvalho",
    description:
      "Especialista em Power BI certificada pela Microsoft. Desenvolvo dashboards interativos e automatizados para diferentes áreas de negócio.",
    src: profileImg,
  };

  return (
    <>
      <Navbar />
      <Hero>
        <HeroContainer>
          <Content>
            <Greeting>{heroData.greeting}</Greeting>
            <Title>{heroData.title}</Title>
            <Description>{heroData.description}</Description>

            <Buttons>
              <AboutButton>
                Sobre mim
                <User size={18} />
              </AboutButton>
              <ProjectButton>
                Projetos
                <Eye size={18} />
              </ProjectButton>
            </Buttons>
          </Content>

          <ImageContainer>
            <Profile src={heroData.src} alt="Foto de perfil" />
          </ImageContainer>
        </HeroContainer>
      </Hero>
      <About />
      <Footer />
    </>
  );
}

export default Home;
