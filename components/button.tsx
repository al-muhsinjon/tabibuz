import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      action,
      className,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={`
    w-auto
    rounded-xl
    px-5
    py-2
    disabled:cursor-not-allowed
    disabled:opacity-50
    text-white
    font-semibold
    hover:opacity-75
    transition
    ${action ? "border-2": ""}
    ${className}
    `}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
