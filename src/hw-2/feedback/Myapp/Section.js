import React from "react";
import "./Styles.css";
function Section({ title, children }) {
    return (
      <section className="Statistic">
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
  export default Section; 
  