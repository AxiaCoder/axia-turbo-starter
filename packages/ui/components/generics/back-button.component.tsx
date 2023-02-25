import React from "react";
import { AiOutlineArrowLeft } from "react-icons/all";

interface IBackButton {
  action: () => void;
  label?: string;
}

export const BackButton: React.FC<IBackButton> = ({
  action,
  label,
}: IBackButton) => {
  return (
    <button type="button" onClick={action}>
      {label ?? <AiOutlineArrowLeft />}
    </button>
  );
};
