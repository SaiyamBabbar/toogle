import React, { useState } from "react"; // import React and useState hook
import useLocalStorage from "use-local-storage"; // import use LocalStorage hook

import "./App.css"; // import CSS styles
import { Toggle } from "./components/Toggle"; // import Toggle component

export const App = () => {
  // Check if the user prefers a dark color scheme
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // default to user preference
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      {/* toggle component to switch between dark and light mode */}
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

      <h1 className="title">Hello Betterzila!</h1>

      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};
