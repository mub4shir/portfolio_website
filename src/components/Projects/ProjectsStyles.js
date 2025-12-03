import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  padding: 3rem;
  place-items: stretch;
  gap: 2.4rem;
  @media ${(p) => p.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.article`
  border-radius: 14px;
  background: ${(p) => p.theme.colors.card};
  border: 1px solid ${(p) => p.theme.colors.border};
  padding: 20px 20px 8px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  }
`;

export const TitleContent = styled.div`
  text-align: left;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${({ $title }) => ($title ? "3rem" : "2rem")};
`;
export const Hr = styled.hr`
  width: 56px;
  height: 3px;
  margin: 10px 0 16px;
  border: 0;
  background: #d0bb57;
`;
export const CardInfo = styled.p`
  color: #e4e6e7;
  font-size: 1.5rem;
  line-height: 2.4rem;
  margin-bottom: 1.2rem;
  opacity: 0.9;
`;
export const UtilityList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  margin: 1.6rem 0 0.6rem;
`;
export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background: #6b3030;
  border-radius: 12px;
  transition: 0.25s;
  &:hover {
    background: #801414;
  }
`;
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0.6rem 0 0;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.3rem;
  padding: 0.2rem 0.6rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
`;
