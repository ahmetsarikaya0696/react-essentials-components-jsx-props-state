function TabButton({ children, isSelected, ...theRestOfProps }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...theRestOfProps}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
