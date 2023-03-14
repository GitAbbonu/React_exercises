// Write a Sum function component that receives a numbers prop (expected to be an array of numbers) and renders the sum of all numbers in the array within a h1 tag.

function Sum(props) {
  const sum = props.numbers.reduce((cont, v) => cont + v, 0);

  return (
    <div>
      <h1>La somma è: {sum}</h1>
    </div>
  );
}

export default Sum;
