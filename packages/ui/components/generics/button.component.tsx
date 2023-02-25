import React from "react";

interface IButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  classType?: "success" | "danger" | "warning" | "info";
  customClass?: string;
}

export const Button: React.FC<IButtonProps> = ({
  label,
  type,
  classType,
  customClass,
}: IButtonProps) => (
  <button
    type={type ?? "button"}
    className={`btn ${classType ?? "default"} ${customClass ?? ""}`}
  >
    {label}
  </button>
);
