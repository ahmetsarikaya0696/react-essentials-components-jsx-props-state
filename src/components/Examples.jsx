import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { Section } from "./Section.jsx";

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
    <Section id="examples" title="Examples">
      <menu>
        {Object.keys(EXAMPLES).map((key) => (
          <TabButton
            key={key}
            isSelected={selectedTopic == key}
            onClick={() => hadleSelect(key)}
          >
            {EXAMPLES[key].title}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </Section>
  );
}
