import ToDoList from "./ToDoList";
import WrapperList from "./WrapperList";

function App() {
  return (
    <div>
      <WrapperList
        render={(
          items,
          addItemHandler,
          resetListHandler,
          removeFromListHandler,
          printList
        ) => {
          return (
            <ToDoList
              items={items}
              onAdd={addItemHandler}
              onResetList={resetListHandler}
              removeFromList={removeFromListHandler}
              printList={printList}
            />
          );
        }}
      />
    </div>
  );
}

export default App;
