import { useState } from "react";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept {...data} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic == "components"}
              onSelect={() => hadleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onSelect={() => hadleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onSelect={() => hadleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onSelect={() => hadleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
