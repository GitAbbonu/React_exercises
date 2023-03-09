// import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  const acceptLoginHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* <Login onLogin={acceptLoginHandler} /> */}
      <UncontrolledLogin onLogin={acceptLoginHandler} />
    </div>
  );
}

export default App;
