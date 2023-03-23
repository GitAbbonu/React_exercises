import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import App from "./App";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Root() {
  return (
    <div>
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SWRConfig>
    </div>
  );
}

export default Root;
