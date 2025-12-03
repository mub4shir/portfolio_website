import { IoIosArrowDropdown } from "react-icons/io";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1rem 0;
  position: relative;

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: #fff;
    text-decoration: none;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const Div1 = styled.div`
  justify-self: start;
`;
export const Div2 = styled.nav`
  justify-self: center;
  display: flex;
  gap: 1.25rem;
  list-style: none;
  @media ${(p) => p.theme.breakpoints.sm} {
    justify-self: start;
    flex-wrap: wrap;
  }
`;
export const Div3 = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  @media ${(p) => p.theme.breakpoints.sm} {
    justify-self: start;
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
  &:hover {
    color: #fff;
  }
  &:focus-visible {
    outline: 2px solid #5b9cff;
    outline-offset: 2px;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    background: currentColor;
    transition: transform 0.2s;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

// Icon button
const IconBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.15s, background 0.2s, border-color 0.2s;
  &:hover {
    transform: scale(1.06);
    background: rgba(255, 255, 255, 0.06);
  }
  &:focus-visible {
    outline: 2px solid #5b9cff;
    outline-offset: 2px;
  }
`;

export const SocialIcons = styled(IconBtn).attrs(({ href, ...rest }) => ({
  children: href?.includes("github") ? (
    <AiFillGithub size="1.3rem" />
  ) : href?.includes("linkedin") ? (
    <AiFillLinkedin size="1.3rem" />
  ) : (
    <AiFillInstagram size="1.3rem" />
  ),
  ...rest,
}))``;

// Contact button + chevron
export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.9rem;
  border: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
  font-size: 1rem; /* fixed typo */
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid #5b9cff;
    outline-offset: 2px;
  }
`;

export const Chevron = styled.span`
  display: inline-block;
  transition: transform 0.18s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  transition: 0.2s;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0.75)};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};
  width: 18px;
  height: 18px;
  @media ${(p) => p.theme.breakpoints.sm} {
    width: 15px;
  }
`;
