import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  const acceptLoginHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <UncontrolledLogin onLogin={acceptLoginHandler} />
    </div>
  );
}

export default App;
