// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input, and reset the form every time the initialData value changes.

import { useEffect, useRef } from "react";

function CarDetails({ initialData }) {
  const formRef = useRef();

  useEffect(() => {
    const { modello, anno, colore } = formRef.current.elements;

    modello.value = initialData.modello;
    anno.value = initialData.anno;
    colore.value = initialData.colore;
    //
  }, [initialData]);

  const submitHandler = (ev) => {
    ev.preventDefault();
    const { modello, anno, colore } = formRef.current.elements;

    console.log(modello.value, anno.value, colore.value);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={submitHandler}>
        <h2>Modello</h2>
        <input name="modello" />
        <h2>Anno</h2>
        <input name="anno" type={"number"} min="1800" max="2023" step={"1"} />
        <h2>Colore</h2>
        <input name="colore" type={"color"} />
        <div>
          <button type="submit">Click</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default CarDetails;
