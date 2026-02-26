import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 65px;
  background: #212135;
  padding: 20px;
`;

export const TitleAbout = styled.h1`
  color: #60a5fa;
  margin-bottom: 18px;
  font-size: 18px;

  @media (min-width: 768px) {
    padding-left: 30px;
  }

  @media (min-width: 1024px) {
    padding-left: 50px;
  }
`;

export const Greeting = styled.p`
  color: #f5f5f5;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    padding: 0 30px;
  }

  @media (min-width: 1024px) {
    padding: 0 50px;
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: white;
  gap: 12px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
    padding: 20px 30px;
  }

  @media (min-width: 1024px) {
    padding: 30px 40px;
  }
`;

export const ExperienceAge = styled.h3`
  font-size: 48px;
  color: #60a5fa;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

export const Experience = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;

  @media (min-width: 768px) {
    margin-left: 30px;
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;

  @media (min-width: 768px) {
    padding: 0 30px 50px;
  }

  @media (min-width: 1024px) {
    padding: 0 50px 60px;
  }
`;

export const SkillCard = styled.div`
  background: #9ca3af;
  padding: 22px;
  border-radius: 6px;
  color: white;
  transition: 0.2s ease;

  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 15px;
  text-transform: uppercase;
  margin: 0;
`;

export const SkillDescription = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  color: #e5e7eb;
`;

export const ContactContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
`;

export const ContactList = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 20px;

  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ContactText = styled.span`
  font-size: 15px;
  color: #e5e7eb;
`;
