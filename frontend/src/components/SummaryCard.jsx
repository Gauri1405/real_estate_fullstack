import React from "react";

function SummaryCard({ summary }) {
  return (
    <div className="summary-box">
      <h3>Summary</h3>
      <p>{summary}</p>
    </div>
  );
}

export default SummaryCard;
