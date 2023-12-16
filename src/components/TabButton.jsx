function TabButton({ children }) {
  const hadleClick = () => {
    console.log(children);
  };

  return (
    <li>
      <button onClick={hadleClick}>{children}</button>
    </li>
  );
}

export default TabButton;
