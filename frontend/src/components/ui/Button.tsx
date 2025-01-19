interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "transparent";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-[4px] px-4 py-2 text-[12px] font-medium transition-all duration-200";
  const widthStyles = fullWidth ? "w-full" : "";

  const variantStyles = {
    primary: "bg-[#1443FF] text-white hover:bg-[#1443FF]/90",
    secondary: "bg-[#E5E6FF] text-[#1443FF] hover:bg-[#E5E6FF]/90",
    transparent: "bg-transparent text-[#7E7E8B] hover:bg-[#7E7E8B]90",
  };

  return (
    <button
      className={`${baseStyles} ${widthStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
