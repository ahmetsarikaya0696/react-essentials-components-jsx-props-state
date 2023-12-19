import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const hadleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  let tabContent = !selectedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div className="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {Object.keys(EXAMPLES).map((key) => (
          <TabButton
            key={key}
            isSelected={selectedTopic == key}
            onSelect={() => hadleSelect(key)}
          >
            {EXAMPLES[key].title}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </section>
  );
}
