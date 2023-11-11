import reactImg from "../../assets/react-core-concepts.png";
import classes from "./Header.module.css";

const reactDescriptions = ["Fundamental", "Cruical", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescriptions[getRandomInt(3)];

  return (
    <header className={classes.header}>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
