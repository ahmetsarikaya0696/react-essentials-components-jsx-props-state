import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { Section } from "./Section.jsx";
import { Tabs } from "./Tabs.jsx";

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

  let buttons = Object.keys(EXAMPLES).map((key) => (
    <TabButton
      key={key}
      isSelected={selectedTopic == key}
      onClick={() => hadleSelect(key)}
    >
      {EXAMPLES[key].title}
    </TabButton>
  ));

  buttons = <>{buttons}</>;

  return (
    <Section id="examples" title="Examples">
      <Tabs ButtonsWrapper="menu" buttons={buttons}>{tabContent}</Tabs>
    </Section>
  );
}
