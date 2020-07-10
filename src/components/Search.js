import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const get = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) {
      get();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
      {/* <Accordion items={results}></Accordion> */}
    </div>
  );
};

export default Search;
