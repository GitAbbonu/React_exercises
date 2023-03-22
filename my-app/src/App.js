import { Route, Routes } from "react-router-dom";
import GithubUser from "./GithubUser";
import ShowGithubUser from "./ShowGithubUser";

// Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component from useEffect 03 by passing it the received username.

function App() {
  return (
    <div>
      <Routes>
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
