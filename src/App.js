import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  { title: "What is React?", content: "React is a front end js framework" },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Shade of Blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      ></Dropdown>
      {/* <Search></Search> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
};
