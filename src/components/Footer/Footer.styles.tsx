import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 30px 20px;
  background: #111827;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background: transparent;
  color: #ffffff;

  border: 1px solid #60a5fa;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  box-shadow: 3px -3px 0px black;
  transition: 0.2s ease;

  width: 100%;
  max-width: 320px;
  padding: 12px 18px;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: #60a5fa;
    color: white;
    transform: translateY(-2px);
    box-shadow: 5px -5px 0px black;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 2px -2px 0px black;
  }

  @media (min-width: 768px) {
    width: auto;
    max-width: none;
    padding: 10px 32px;
  }
`;
