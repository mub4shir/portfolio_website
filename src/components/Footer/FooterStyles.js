import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: min(1040px, calc(100vw - 96px));
  padding: 2rem 48px 40px;
  margin: 1rem auto 0;
  box-sizing: content-box;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 1rem 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkItem = styled.a`
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 8px;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.15s ease;
  &:hover {
    color: #fff;
    transform: translateX(4px);
  }

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 0.95rem;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 0.9rem;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${(p) => p.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    margin: 0 0 16px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.02em;
  font-size: 1rem;
  line-height: 1.7;
  padding: 0.5rem 0;
  margin: 0;

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 0.95rem;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 0.9rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 28px 40px;
  padding: 24px 0 16px;
  margin: 0;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
    gap: 20px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px 0;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 160px;
`;

export const LinkTitle = styled.h4`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.2;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin: 0 0 8px;
  letter-spacing: 0.08em;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
`;
