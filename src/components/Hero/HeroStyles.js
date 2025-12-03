import styled, { keyframes } from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding: 56px 16px 32px;

  @media ${(p) => p.theme.breakpoints.md} {
    padding: 48px 16px 24px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    width: 92%;
    padding: 40px 12px 20px;
  }
`;

export const Tagline = styled.div`
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 10px;
`;

const blink = keyframes`50% { opacity: 0; }`;

export const MonoLine = styled.code`
  display: inline-block;
  margin: 14px 0 22px;
  padding: 10px 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(4px);
`;

export const Caret = styled.span`
  display: inline-block;
  width: 8px;
  margin-left: 6px;
  animation: ${blink} 1s steps(1) infinite;
`;

export const CTAGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  /* Make Button anchors look consistent when used as="a" */
  a,
  span {
    text-decoration: none;
  }
`;
