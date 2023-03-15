import ToDoList from "./ToDoList";
import WrapperList from "./WrapperList";
import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

function App() {
  const [lan, setLan] = useState("en");

  const languageChangeHandler = (ev) => {
    const { value } = ev.target;

    setLan(value);
  };

  return (
    <div>
      <select value={lan} onChange={languageChangeHandler}>
        <option value={"en"}>ENGLISH</option>
        <option value={"it"}>ITALIANO</option>
      </select>
      <LanguageContext.Provider value={lan}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
