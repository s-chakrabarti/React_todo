import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState<string>("");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div style={{ border: "2px solid", padding: "10px" }}>
        <p>TODO APP</p>
        {todos.map(function (currentValue, index) {
          return (
            <div
              style={{
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                border: "2px solid",
                marginBottom: "10px",
                padding: "10px",
                justifyContent: "space-between",
              }}
              key={index}
            >
              <div style={{ marginRight: "10px" }}>{currentValue}</div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button>edit</button>
                <button>delete</button>
              </div>
            </div>
          );
        })}
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <input
            placeholder="Enter new Note"
            value={currentNote}
            onChange={function (event) {
              setCurrentNote(event.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={function () {
              if (!(currentNote === "")) {
                const newArray = [...todos];

                newArray.push(currentNote);
                setTodos(newArray);
                setCurrentNote("");
              }
            }}
          >
            save
          </button>
          <button
            onClick={function () {
              setCurrentNote("");
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
