import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="header-section">
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </header>
  );
};

Header.defaultProps = {
  title: "Goal Tracker",
  subtitle: "by Khair Alanam",
};

export default Header;
