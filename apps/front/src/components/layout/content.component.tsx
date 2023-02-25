import React from "react";

interface IContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<IContentProps> = ({
  children,
}: IContentProps) => <section className="console-content">{children}</section>;
