import styled from "styled-components";

/* HERO */
export const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212135;
  padding: 0 20px;
`;

/* CONTAINER */
export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 90px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  background: #212135;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 70px 20px;
  }
`;

/* CONTENT */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Greeting = styled.p`
  font-size: 18px;
  color: #f5f5f5;
  margin-bottom: 14px;
`;

export const Title = styled.h1`
  font-size: 54px;
  font-weight: 700;
  margin: 0 0 22px 0;
  color: white;
  line-height: 1.05;

  @media (max-width: 900px) {
    font-size: 42px;
  }

  @media (max-width: 500px) {
    font-size: 34px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.75;
  color: #f5f5f5;
  margin-bottom: 36px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

/* BUTTONS */
export const Buttons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const BaseButton = styled.button`
  padding: 14px 26px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.25s ease;

  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;

export const AboutButton = styled(BaseButton)`
  background-color: #3b82f6;
  color: white;
  border: none;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }
`;

export const ProjectButton = styled(BaseButton)`
  background-color: transparent;
  color: white;
  border: 2px solid #3b82f6;

  &:hover {
    background-color: rgba(59, 130, 246, 0.15);
    transform: translateY(-2px);
  }
`;

/* IMAGE */
export const ImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin-left: -60px;

  &:before {
    content: "";
    position: absolute;
    width: 320px;
    height: 320px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 900px) {
    width: 260px;
    height: 260px;
    margin: 0 auto;

    &:before {
      width: 260px;
      height: 260px;
    }
  }
`;

export const Profile = styled.img`
  width: 290px;
  height: 290px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);

  @media (max-width: 900px) {
    width: 230px;
    height: 230px;
  }
`;
