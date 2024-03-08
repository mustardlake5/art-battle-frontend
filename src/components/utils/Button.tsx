import { ButtonHTMLAttributes } from "react";

const Button = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`py-3 px-5 rounded-2xl bg-slate-500 shadow-md hover:translate-y-1 hover:shadow-none text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
