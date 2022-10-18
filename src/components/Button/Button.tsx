import { ReactNode, useMemo } from "react";
import { ButtonTypes } from "../../constants/common";

interface IButton {
  children: ReactNode;
  className?: string;
  onClick?(): void;
  theme?: ButtonTypes;
  isSubmit?: boolean;
}

export const Button = ({
  children,
  className,
  onClick,
  theme = ButtonTypes.PRIMARY,
  isSubmit,
}: IButton) => {
  const setButtonStyles = useMemo(() => {
    switch (theme) {
      case ButtonTypes.PRIMARY:
        return "bg-blue-600 text-white";

      case ButtonTypes.SECONDARY:
        return "bg-white text-blue-600";

      default:
        return "";
    }
  }, [theme]);

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      className={`px-3 py-2 rounded font-medium shadow-sm ${setButtonStyles} ${className}`}
    >
      {children}
    </button>
  );
};
