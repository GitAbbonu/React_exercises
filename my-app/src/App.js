import "./App.css";

function App() {
  const _nome = "Pippo";

  function fun(nome) {
    return <h1>Hello, {nome}</h1>;
  }

  return <div>{fun(_nome)}</div>;
}

export default App;
