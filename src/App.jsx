import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Cruical", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescriptions[getRandomInt(3)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
