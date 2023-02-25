import React from "react";

interface ISubmitButtonProps {
  label: string;
  type?: "success" | "danger" | "warning" | "info";
}

export const FormSubmit: React.FC<ISubmitButtonProps> = ({
  label,
  type,
}: ISubmitButtonProps) => (
  <button type="submit" className={`btn ${type ?? ""}`}>
    {label}
  </button>
);
