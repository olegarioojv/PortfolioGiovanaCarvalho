import styled from "styled-components";

export const ProjectsConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #212135;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ProjectsMenu = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 18px 90px;

  color: white;
  font-size: 22px;
  font-weight: 700;

  background: #212135;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 5px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  color: white;
`;

export const ProjectsList = styled.section`
  width: 100%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProjectsCard = styled.div`
  display: flex;
  gap: 22px;

  background: #31313f;
  border-radius: 18px;
  padding: 18px;

  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);

  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const ProjectImg = styled.img`
  width: 300px;
  border-radius: 14px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 260px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #38bdf8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProjectSubTitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-size: 13px;
  color: #cbd5f5;
  line-height: 1.5;
  margin: 0;
`;

export const ProjectsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  align-self: flex-start;
  width: auto;

  padding: 8px 19px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  transition: 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }
`;
export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background: #212135;

  padding: 10px 0 30px;
  color: white;

  @media (max-width: 500px) {
    gap: 10px;
    font-size: 14px;
  }
`;

export const PaginationButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;

  padding: 6px 12px;
  border-radius: 8px;

  cursor: pointer;
  transition: 0.15s ease;

  &:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.15);
    border-color: rgba(59, 130, 246, 0.6);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const PaginationInfo = styled.span`
  opacity: 0.85;
  font-size: 14px;
`;
