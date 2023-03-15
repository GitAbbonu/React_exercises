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
  return (
    <div>
      <LanguageContext.Consumer>
        {(lan) => {
          return (
            <div>
              {tradution[lan].TRAD} {lan}
            </div>
          );
        }}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;
