import React, { useState } from "react";

import { EXAMPLES } from "../../utils/CORE_CONCEPTS";
import { TabButton } from "../TabButton/TabButton";

export function CategoryComponent() {
  const [selectedCategory, setSelectedCategory] = useState("");
  let category = <p>Please select category 👀</p>;

  if (selectedCategory) {
    category = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedCategory].title}</h3>
        <p>{EXAMPLES[selectedCategory].description}</p>
        <pre>
          <code>{EXAMPLES[selectedCategory].code}</code>
        </pre>
      </div>
    );
  }
  const handleChangeValue = (value) => {
    setSelectedCategory(value);
    console.log(selectedCategory);
  };

  return (
    <section id="examples">
      <menu>
        <TabButton
          active={selectedCategory === "components"}
          onClick={() => handleChangeValue("components")}
        >
          COMPONENTS
        </TabButton>
        <TabButton
          active={selectedCategory === "jsx"}
          onClick={() => handleChangeValue("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          active={selectedCategory === "props"}
          onClick={() => handleChangeValue("props")}
        >
          PROPS
        </TabButton>
        <TabButton
          active={selectedCategory === "state"}
          onClick={() => handleChangeValue("state")}
        >
          STATE
        </TabButton>
      </menu>
      {category}
    </section>
  );
}
