import React from "react";

export function TabButton({ children, active, ...props }) {
  return (
    <li>
      <button className={active ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
