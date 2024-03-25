import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Buttonprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, Buttonprops>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button type={type} className={twMerge(`w-full rounded-full`)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
