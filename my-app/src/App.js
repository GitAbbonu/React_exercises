import Login from "./Login";

function App() {
  const acceptLoginHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Login onLogin={acceptLoginHandler} />
    </div>
  );
}

export default App;
