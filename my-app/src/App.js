import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import Welcome from "./Welcome";
// Add an index route to the GithubUserList route that shows the "Add a user and select it" message.
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
            <Route index element={<p>Add a user and select it</p>} />
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
