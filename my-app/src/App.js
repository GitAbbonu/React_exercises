import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

// Add three Links within the main App component and use them to navigate to all three routes.
function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/counter"}>Counter</Link>
        <Link to={"/users"}>Users</Link>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/users" element={<ShowGithubUser />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
