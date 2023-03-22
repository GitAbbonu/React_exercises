import { useParams } from "react-router-dom";

function Welcome() {
  const { name = "World!" } = useParams();

  return (
    <div>
      <h1>Welcome, {name}</h1>
    </div>
  );
}

export default Welcome;
