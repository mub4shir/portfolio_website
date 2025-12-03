// Button.js
import React from "react";
import { ButtonBack, ButtonFront } from "./index";

const Button = ({
  children,
  type = "button",
  alt,
  form,
  disabled,
  onClick,
  as,
  href,
}) => (
  <ButtonBack as={as} href={href} $alt={alt} $form={form} $disabled={disabled}>
    <ButtonFront
      type={type}
      onClick={onClick}
      disabled={disabled}
      $alt={alt}
      aria-disabled={disabled || undefined}
    >
      {children}
    </ButtonFront>
    {children}
  </ButtonBack>
);

export default Button;
