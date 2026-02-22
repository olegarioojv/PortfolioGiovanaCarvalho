import { useLocation, useNavigate } from "react-router-dom";

// Icon
import { Eye, User } from "lucide-react";

// Components
import { AboutButton, Buttons, ProjectButton } from "../Home/Home.styles";
import Navbar from "../../components/Navbar/Navbar";

//Styles
import {
  ProjectsContent,
  ProjectsConteiner,
  ProjectsList,
  ProjectsCard,
  ProjectImg,
  ProjectTitle,
  ProjectSubTitle,
  ProjectDescription,
  ProjectsButton,
  ProjectsMenu,
} from "./Projects.styles";

// Footer
import FooterProjects from "../../components/Footer/FooterProjects";

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();

  const ProjectsData = {
    text: "Explore alguns projetos que já desenvolvi: ",
  };

  const ProjectsListData = [
    {
      title: "Dashboard de Vendas",
      subTitle: "Objetivos principais e indicadores:",
      description:
        "Desenvolvimento de um dashboard interativo para análise de vendas, utilizando Power BI. O projeto envolveu a integração de múltiplas fontes de dados, criação de visualizações personalizadas e implementação de filtros avançados para facilitar a tomada de decisões estratégicas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Clique para interagir",
    },
    {
      title: "Dashboard de Vendas",
      subTitle: "Objetivos principais e indicadores:",
      description:
        "Desenvolvimento de um dashboard interativo para análise de vendas, utilizando Power BI. O projeto envolveu a integração de múltiplas fontes de dados, criação de visualizações personalizadas e implementação de filtros avançados para facilitar a tomada de decisões estratégicas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Clique para interagir",
    },
    {
      title: "Dashboard de Vendas",
      subTitle: "Objetivos principais e indicadores:",
      description:
        "Desenvolvimento de um dashboard interativo para análise de vendas, utilizando Power BI. O projeto envolveu a integração de múltiplas fontes de dados, criação de visualizações personalizadas e implementação de filtros avançados para facilitar a tomada de decisões estratégicas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Clique para interagir",
    },
    {
      title: "Dashboard de Vendas",
      subTitle: "Objetivos principais e indicadores:",
      description:
        "Desenvolvimento de um dashboard interativo para análise de vendas, utilizando Power BI. O projeto envolveu a integração de múltiplas fontes de dados, criação de visualizações personalizadas e implementação de filtros avançados para facilitar a tomada de decisões estratégicas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Clique para interagir",
    },
    {
      title: "Dashboard de Vendas",
      subTitle: "Objetivos principais e indicadores:",
      description:
        "Desenvolvimento de um dashboard interativo para análise de vendas, utilizando Power BI. O projeto envolveu a integração de múltiplas fontes de dados, criação de visualizações personalizadas e implementação de filtros avançados para facilitar a tomada de decisões estratégicas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Clique para interagir",
    },
  ];

  return (
    <>
      <Navbar />
      <ProjectsMenu>
        {ProjectsData.text}
        <Buttons>
          <AboutButton
            active={location.pathname === "/"}
            onClick={() => navigate("/")}>
            Sobre mim
            <User size={18} />
          </AboutButton>

          <ProjectButton
            active={location.pathname === "/projects"}
            onClick={() => navigate("/projects")}>
            Projetos
            <Eye size={18} />
          </ProjectButton>
        </Buttons>
      </ProjectsMenu>
      <ProjectsConteiner>
        <ProjectsList>
          {ProjectsListData.map((projects, index) => (
            <ProjectsCard key={index}>
              <ProjectImg src={projects.image} alt={projects.title} />
              <ProjectsContent>
                <ProjectTitle>{projects.title}</ProjectTitle>
                <ProjectSubTitle>{projects.subTitle}</ProjectSubTitle>
                <ProjectDescription>{projects.description}</ProjectDescription>
                <ProjectsButton>{projects.buttonText}</ProjectsButton>
              </ProjectsContent>
            </ProjectsCard>
          ))}
        </ProjectsList>
      </ProjectsConteiner>
      <FooterProjects />
    </>
  );
}

export default Projects;
