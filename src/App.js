import React, { useState } from "react";

import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items}></Accordion>;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search></Search>;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown></Dropdown>;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate></Translate>;
  }
};

export default () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};
