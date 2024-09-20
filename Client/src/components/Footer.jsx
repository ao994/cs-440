import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <>
        <footer className="fixed-bottom">
          <p>@ Canvas App {year}</p>
        </footer>
      </>
    );
  }
  
  export default Footer;