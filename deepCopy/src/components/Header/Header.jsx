import React from "react";

export function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  const randomReactDescriptions = () => {
    return Math.floor(Math.random() * (reactDescriptions.length + 1));
  };
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[randomReactDescriptions()]} React concepts you will
        need for almost any app you are going to build!
      </p>
    </header>
  );
}
