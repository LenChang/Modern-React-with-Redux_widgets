import React, { useState } from "react";

import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
  return (
    <div>
      <Translate />
    </div>
  );
};
