import React from "react";
import "./Styles.css";
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="Statistic__controls">
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
