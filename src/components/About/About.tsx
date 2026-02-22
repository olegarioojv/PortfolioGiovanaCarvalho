import {
  AboutContainer,
  CardIcon,
  ContactContainer,
  ContactInfo,
  ContactText,
  Experience,
  ExperienceAge,
  ExperienceContainer,
  Greeting,
  SkillCard,
  SkillContainer,
  SkillDescription,
  SkillTitle,
  TitleAbout,
  ContactIcon,
  ContactList,
} from "./About.styles";

import {
  ChartPie,
  SquareKanban,
  Rocket,
  Truck,
  Instagram,
  Phone,
  Mail,
  Linkedin,
  Globe,
} from "lucide-react";

function About() {
  const AboutData = {
    title_about: "| Sobre mim:",
    greeting:
      "Seja muito bem vindo(a) ao meu portfólio. Conheça um pouco da minha história:",
    experienceAge: "1+",
    experience:
      "Anos de experiência profissional em Supply Chain, com histórico de atuação como líder de projetos em multinacionais como Bosch e Honda. Trabalho com o Power BI desde 2017 e sou apaixonada pelo universo de DataViz e design de dashboards. Desde Junho/2021 concentro toda a minha energia em treinamentos e desenvolvimento de profissionais que queriam se especializar no mundo dos dados e Power BI.",
    title_skills: "| Principais habilidades:",
    title_contact: "| Como você pode entrar em contato comigo:",
  };

  const skillsData = [
    {
      title: "Visualização & Análise de Dados",
      description:
        "Desenvolvimento de dashboards através de ferramentas como: Power BI, Tableau e Excel.",
      icon: <ChartPie size={32} />,
    },
    {
      title: "Design de Dashboards",
      description:
        "Aplicação do Figma ou PowerPoint para elaborar layouts premium para projetos de Business Intelligence.",
      icon: <SquareKanban size={32} />,
    },
    {
      title: "Gestão de Projetos",
      description:
        "Implementação de softwares (Power BI, TMS e WMS), concorrência de fornecedores (BID) e otimização de processos logísticos.",
      icon: <Rocket size={32} />,
    },
    {
      title: "Supply Chain",
      description:
        "Sólido conhecimento em transportes, processos de armazenagem, compras e comércio exterior (importação/exportação).",
      icon: <Truck size={32} />,
    },
  ];

  const contactData = [
    {
      icons: <Globe size={28} />,
      text: "giovanacarvalhoio.vercel.app",
    },
    {
      icons: <Instagram size={28} />,
      text: "@stcliffx",
    },
    {
      icons: <Phone size={28} />,
      text: "+55 (11) 97897-4523",
    },
    {
      icons: <Mail size={28} />,
      text: "giovanarocha365@gmail.com",
    },
    {
      icons: <Linkedin size={28} />,
      text: "@Giovana Carvalho",
    },
  ];

  return (
    <AboutContainer>
      <TitleAbout>{AboutData.title_about}</TitleAbout>
      <Greeting>{AboutData.greeting}</Greeting>
      <ExperienceContainer>
        <ExperienceAge>{AboutData.experienceAge}</ExperienceAge>
        <Experience>{AboutData.experience}</Experience>
      </ExperienceContainer>
      <TitleAbout>{AboutData.title_skills}</TitleAbout>
      <SkillContainer>
        {skillsData.map((skills, index) => (
          <SkillCard key={index}>
            <CardIcon>{skills.icon}</CardIcon>
            <SkillTitle>{skills.title}</SkillTitle>
            <SkillDescription>{skills.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillContainer>
      <ContactContainer>
        <TitleAbout>{AboutData.title_contact}</TitleAbout>

        <ContactList>
          {contactData.map((contact, index) => (
            <ContactInfo key={index}>
              <ContactIcon>{contact.icons}</ContactIcon>
              <ContactText>{contact.text}</ContactText>
            </ContactInfo>
          ))}
        </ContactList>
      </ContactContainer>
    </AboutContainer>
  );
}

export default About;
