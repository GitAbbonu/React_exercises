import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function DisplayLanguage() {
  const tradution = {
    en: {
      TRAD: "language is: ",
    },
    it: {
      TRAD: "la lingua è in: ",
    },
  };
  //   Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext through the useContext hook.
  const lan = useContext(LanguageContext);

  return (
    <div>
      {/* <LanguageContext.Consumer>
        {(lan) => {
          return (
            <div> */}
      <h1>
        {tradution[lan].TRAD} {lan}
      </h1>
      {/* </div>
          );
        }}
      </LanguageContext.Consumer> */}
    </div>
  );
}

export default DisplayLanguage;
