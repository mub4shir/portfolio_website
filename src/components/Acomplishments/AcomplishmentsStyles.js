import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 20px;
  margin: 20px 0 36px;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: repeat(3, minmax(160px, 1fr));
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 12px;
    margin: 16px 0 28px;
  }
`;

export const Box = styled.div`
  position: relative;
  border-radius: 14px;
  padding: 22px 20px;
  background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.03),
        rgba(255, 255, 255, 0.03)
      )
      padding-box,
    radial-gradient(
        120% 120% at 0% 0%,
        rgba(255, 255, 255, 0.18),
        rgba(255, 255, 255, 0.02)
      )
      border-box;
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 120px;
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.18);
  }
  @media ${(p) => p.theme.breakpoints.md} {
    min-height: 110px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    min-height: 96px;
    padding: 16px;
  }
`;

export const BoxNum = styled.h5`
  margin: 0 0 6px;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: #fff;

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 1.7rem;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.02em;

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 0.95rem;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 0.9rem;
  }
`;

/* (Optional) Keep if used elsewhere */
export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 32px;
  }
`;
export const JoinText = styled.h5`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 1.1rem;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1rem;
    margin: 0 0 12px;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  @media ${(p) => p.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
