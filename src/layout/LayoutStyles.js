import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  @media ${(p) => p.theme.breakpoints.md} {
    padding: 0 20px;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: calc(100vh - 160px); /* header + footer spacing */

  @media ${(p) => p.theme.breakpoints.md} {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;
