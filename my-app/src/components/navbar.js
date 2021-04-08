import React from "react";
import "./styles/navbar.css";

const styles = {
  navbarStyle: {
    background: "black",
    justifyContent: "center",
    padding: "10px",
    marginBottom: "15px:",
  },
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <h1>Employee Directory</h1>
    </nav>
  );
}

export default Navbar;
