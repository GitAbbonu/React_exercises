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

  //   Consume the LanguageContext within the DisplayLanguage component by using the context consumer, and show the selected language in an h1 tag.
  return (
    <div>
      <LanguageContext.Consumer>
        {(lan) => {
          return (
            <div>
              <h1>
                {tradution[lan].TRAD} {lan}
              </h1>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    </div>
  );
}

export default DisplayLanguage;
