import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <BiLoaderCircle className="icon-spin" />
    </div>
  );
};
