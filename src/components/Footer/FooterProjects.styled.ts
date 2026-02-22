import styled from "styled-components";

export const FooterProjectsContainer = styled.footer`
  width: 100%;
  background: #171728;

  display: flex;
  align-items: center;

  padding: 10px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;
export const FooterProjectsContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const FooterProjectsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  color: white;

  cursor: pointer;
  padding: 6px;
  border-radius: 8px;

  transition: 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
export const FooterProjectsSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: white;
  font-size: 17px;
  font-weight: 500;

  opacity: 0.9;

  svg {
    width: 25px;
    height: 25px;
  }
`;
