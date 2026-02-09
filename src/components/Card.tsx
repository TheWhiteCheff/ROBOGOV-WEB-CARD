import React from "react";

export default function Card({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return <div className={`card ${hover ? "card--hover" : ""} ${className}`}>{children}</div>;
}
