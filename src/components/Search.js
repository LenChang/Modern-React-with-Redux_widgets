import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  //   console.log(term);

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        ></input>
      </div>
    </div>
  );
};

export default Search;
