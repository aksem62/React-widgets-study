import React, { useState, useEffect } from "react";

const Seach = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("useEffect used");
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Seach;
