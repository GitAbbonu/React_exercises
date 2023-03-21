import React from "react";
import FilteredList from "./FilteredList";

const objArray = [
  {
    id: 1,
    nome: "Mario",
    eta: 19,
  },
  {
    id: 2,
    nome: "Luigi",
    eta: 16,
  },
  {
    id: 3,
    nome: "Pippo",
    eta: 30,
  },
  {
    id: 4,
    nome: "Nome1",
    eta: 17,
  },
  {
    id: 5,
    nome: "Nome2",
    eta: 40,
  },
  {
    id: 6,
    nome: "Nome3",
    eta: 5,
  },
];

function App() {
  return (
    <div>
      <FilteredList objs={objArray} />
    </div>
  );
}

export default App;
