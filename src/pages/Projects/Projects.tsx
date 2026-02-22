import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

// Icon
import { Eye, User } from "lucide-react";

// Components
import { AboutButton, Buttons, ProjectButton } from "../Home/Home.styles";
import Navbar from "../../components/Navbar/Navbar";

// Styles
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
  PaginationContainer,
  PaginationButton,
  PaginationInfo,
} from "./Projects.styles";

// Footer
import FooterProjects from "../../components/Footer/FooterProjects";

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();

  const ProjectsData = {
    text: "Explore alguns projetos que já desenvolvi:",
  };

  const ProjectsListData = [
    {
      title: "Dashboard de Vendas",
      subTitle: "Objetivos principais e indicadores:",
      description: "Desenvolvimento de dashboard interativo com Power BI.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Clique para interagir",
    },
    {
      title: "Sistema Financeiro",
      subTitle: "Gestão e relatórios:",
      description: "Aplicação para controle financeiro e métricas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Ver detalhes",
    },
    {
      title: "App Mobile",
      subTitle: "Experiência do usuário:",
      description: "Interface moderna focada em UX/UI.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Explorar",
    },
    {
      title: "Landing Page",
      subTitle: "Conversão:",
      description: "Página otimizada para marketing.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Abrir",
    },
    {
      title: "Dashboard Analytics",
      subTitle: "Indicadores:",
      description: "Visualização estratégica de métricas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Interagir",
    },
    {
      title: "Projeto Extra",
      subTitle: "Paginação:",
      description: "Projeto adicional para teste de páginas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Ver projeto",
    },
    {
      title: "Projeto Extra",
      subTitle: "Paginação:",
      description: "Projeto adicional para teste de páginas.",
      image:
        "https://dashboardacademy.com.br/wp-content/uploads/2023/09/inspiracao-para-dashboard-gerencial-modelo-3.png",
      buttonText: "Ver projeto",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  const currentProjects = ProjectsListData.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  const totalPages = Math.ceil(ProjectsListData.length / projectsPerPage);

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
          {currentProjects.map((projects, index) => (
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
      <PaginationContainer>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}>
          ◀ Anterior
        </PaginationButton>

        <PaginationInfo>
          Página {currentPage} / {totalPages}
        </PaginationInfo>

        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}>
          Próxima ▶
        </PaginationButton>
      </PaginationContainer>
      <FooterProjects />
    </>
  );
}

export default Projects;
