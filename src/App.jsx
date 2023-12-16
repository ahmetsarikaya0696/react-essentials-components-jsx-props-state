import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  const hadleSelect = (selectedButton) => {
    console.log(selectedButton);
  };

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
            <TabButton onSelect={() => hadleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => hadleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => hadleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => hadleSelect("state")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
