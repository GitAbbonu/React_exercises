import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import Welcome from "./Welcome";

// Add a Route to the users path that shows the GihubUserList component from useEffect 04. Modify it so that instead of showing the GithubUser component for each username entered, it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.
function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/counter"}>Counter</Link>
        <Link to={"/users"}>Users</Link>

        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<GithubUser />} />
          </Route>
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
