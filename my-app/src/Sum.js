// What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop?

function Sum({ numbers = [1, 2, 3, 4] }) {
  const sum = numbers.reduce((cont, v) => cont + v, 0);

  return (
    <div>
      <h1>La somma è: {sum}</h1>
    </div>
  );
}

export default Sum;
