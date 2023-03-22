import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

// Add a Not Found route that renders when a user navigates to a path that does not exist.
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
          <Route
            path="*"
            element={
              <div>
                <h1>404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
