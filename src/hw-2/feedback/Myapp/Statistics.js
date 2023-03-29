import React from "react";
import "./Styles.css";
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className="value">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

export default Statistics;
