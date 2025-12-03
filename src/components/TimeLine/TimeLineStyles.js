import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0f1624;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
  margin-bottom: 80px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  @media ${(p) => p.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => (final ? "120%" : "min-content")};
  }
`;

export const CarouselItem = styled.div`
  background: #0f1624;
  border-radius: 6px;
  max-width: 196px;
  outline: none;

  @media ${(p) => p.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0e131f;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 6px;
    position: relative;
    height: fit-content;
    opacity: ${(p) => (p.active === p.index ? 1 : 0.5)};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 8px;

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;
  @media ${(p) => p.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;
  margin: 0;

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${(p) => p.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(p) => (p.active === p.index ? 1 : 0.33)};
  transform: ${(p) => (p.active === p.index ? "scale(1.6)" : "scale(1)")};
  &:focus-visible {
    outline: 2px solid #5b9cff;
    outline-offset: 2px;
  }
`;

export const CarouselButtonDot = styled.div`
  background: #fff;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
