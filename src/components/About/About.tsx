import {
  AboutContainer,
  Experience,
  ExperienceAge,
  ExperienceContainer,
  Greeting,
  TitleAbout,
} from "./About.styles";

function About() {
  const AboutDate = {
    title_about: "| Sobre mim:",
    greeting:
      "Seja muito bem vindo(a) ao meu portfólio. Conheça um pouco da minha história:",
    experienceAge: "8+",
    experience:
      "Anos de experiência profissional em Supply Chain, com histórico de atuação como líder de projetos em multinacionais como Bosch e Honda. Trabalho com o Power BI desde 2017 e sou apaixonada pelo universo de DataViz e design de dashboards. Desde Junho/2021 concentro toda a minha energia em treinamentos e desenvolvimento de profissionais que queriam se especializar no mundo dos dados e Power BI.",
    title_skills: "| Principais habilidades:",
  };

  const skillsData = [
    {
      title: "Visualização & Análise de Dados",
      description:
        "Desenvolvimento de dashboards através de ferramentas como: Power BI, Tableau e Excel.",
    },
    {
      title: "Design de Dashboards",
      description:
        "Aplicação do Figma ou PowerPoint para elaborar layouts premium para projetos de Business Intelligence.",
    },
    {
      title: "Gestão de Projetos",
      description:
        "Implementação de softwares (Power BI, TMS e WMS), concorrência de fornecedores (BID) e otimização de processos logísticos.",
    },
    {
      title: "Supply Chain",
      description:
        "Sólido conhecimento em transportes, processos de armazenagem, compras e comércio exterior (importação/exportação).",
    },
  ];

  return (
    <AboutContainer>
      <TitleAbout>{AboutDate.title_about}</TitleAbout>
      <Greeting>{AboutDate.greeting}</Greeting>
      <ExperienceContainer>
        <ExperienceAge>{AboutDate.experienceAge}</ExperienceAge>
        <Experience>{AboutDate.experience}</Experience>
      </ExperienceContainer>
      <TitleAbout>{AboutDate.title_skills}</TitleAbout>
    </AboutContainer>
  );
}

export default About;
