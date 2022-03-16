const Header = ({ handleDarkMode }) => {
  return (
    <div class="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)}
      >
        Toggle
      </button>
    </div>
  );
};

export default Header;
