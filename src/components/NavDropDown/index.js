// NavDropDown/NavDropDown.js
import React, { useEffect, useRef, useState } from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
  Divider,
  FooterHint,
} from "./NavDropDown";

const items = [
  /* same as before */
];

export default function NavDropDown({ active, onClose }) {
  const ref = useRef(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!active) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose?.();
    };
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((i) => Math.min(i + 1, items.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        ref.current?.querySelectorAll("a")[idx]?.click();
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [active, idx, onClose]);

  useEffect(() => {
    if (active) ref.current?.querySelectorAll("a")[idx]?.focus();
  }, [active, idx]);

  return (
    <DropDownContainer
      ref={ref}
      role="menu"
      aria-hidden={!active}
      aria-expanded={active}
      active={active}
    >
      {items.map((it, i) => (
        <DropDownItem
          key={it.title}
          href={it.href}
          role="menuitem"
          tabIndex={0}
          data-active={i === idx}
        >
          <DropDownIcon>{it.icon}</DropDownIcon>
          <DropDownTextContainer>
            <DropDownItemTitle>{it.title}</DropDownItemTitle>
            <DropDownItemDesc>{it.desc}</DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
      ))}
      <Divider />
      <FooterHint>Press ↑ ↓ Enter • Esc to close</FooterHint>
    </DropDownContainer>
  );
}
