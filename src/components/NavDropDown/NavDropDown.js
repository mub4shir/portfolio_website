// import styled from "styled-components";

// export const DropDownContainer = styled.div`
//   position: absolute;
//   right: 0;
//   top: 48px;
//   width: 280px;
//   background: #fff;
//   border-radius: 10px;
//   z-index: 100;
//   padding: 6px 0;
//   overflow: hidden;
//   box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
//   transform-origin: top right;
//   transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
//   visibility: ${({ active }) => (active ? "visible" : "hidden")};
//   opacity: ${({ active }) => (active ? 1 : 0)};
//   transform: ${({ active }) => (active ? "scale(1)" : "scale(0.96)")};

//   @media ${(p) => p.theme.breakpoints.md} {
//     top: 40px;
//   }
//   @media ${(p) => p.theme.breakpoints.sm} {
//     top: 32px;
//     width: 240px;
//   }
// `;

// export const DropDownItem = styled.a`
//   display: flex;
//   gap: 12px;
//   padding: 12px 14px;
//   text-decoration: none;
//   color: #0f1624;
//   transition: background 0.15s ease, transform 0.15s ease;

//   &:hover {
//     background: #f5f7fb;
//     transform: translateX(2px);
//   }
//   &:focus-visible {
//     outline: 2px solid #5b9cff;
//     outline-offset: -2px;
//   }
// `;

// export const DropDownIcon = styled.div`
//   width: 32px;
//   height: 32px;
//   display: grid;
//   place-items: center;
//   color: #0f1624;
//   opacity: 0.9;
// `;

// export const DropDownTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const DropDownItemTitle = styled.h2`
//   margin: 0;
//   font-size: 16px;
//   line-height: 22px;
//   color: #0f1624;
// `;

// export const DropDownItemDesc = styled.p`
//   margin: 2px 0 0;
//   font-size: 13px;
//   line-height: 18px;
//   color: rgba(15, 22, 36, 0.6);
// `;

// NavDropDown/NavDropDown.js (styles)
import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 48px;
  width: 300px;
  z-index: 100;
  overflow: hidden;
  background: rgba(16, 23, 39, 0.72);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  transform-origin: top right;
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
  visibility: ${(p) => (p.active ? "visible" : "hidden")};
  opacity: ${(p) => (p.active ? 1 : 0)};
  transform: ${(p) =>
    p.active ? "scale(1) translateY(0)" : "scale(.97) translateY(-6px)"};
`;

export const DropDownItem = styled.a`
  display: flex;
  gap: 12px;
  padding: 12px 14px;
  text-decoration: none;
  color: #e8eefc;
  transition: background 0.15s ease, transform 0.15s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateX(2px);
  }
  &:focus-visible {
    outline: 2px solid #5b9cff;
    outline-offset: -2px;
  }
  &[data-active="true"] {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const DropDownIcon = styled.div`
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  color: #e8eefc;
  opacity: 0.9;
`;

export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DropDownItemTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
`;
export const DropDownItemDesc = styled.p`
  margin: 2px 0 0;
  font-size: 13px;
  color: rgba(232, 238, 252, 0.65);
`;

export const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 6px 0;
`;
export const FooterHint = styled.div`
  font-size: 12px;
  color: rgba(232, 238, 252, 0.5);
  padding: 8px 12px;
  text-align: right;
`;
