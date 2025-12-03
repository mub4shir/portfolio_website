import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(p) => p.theme.breakpoints.lg}, ${(p) => p.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 28px;
  margin: 2.25rem 0;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 1.5rem 0;
  }
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: start;
  gap: 14px;
  padding: 16px 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.04);
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 36px 1fr;
    padding: 14px;
  }
`;

export const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  color: #e7f1fb;
  opacity: 0.9;
  @media ${(p) => p.theme.breakpoints.sm} {
    width: 36px;
    height: 36px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h4`
  margin: 0 0 6px;
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.3;
  color: #fff;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.05rem;
  }
`;

export const ListParagraph = styled.p`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;
