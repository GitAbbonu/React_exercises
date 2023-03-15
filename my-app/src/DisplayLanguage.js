import { LanguageContext } from "./LanguageContext";

//Create a LanguageContext and wrap a DisplayLanguage component within its provider. Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.

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
