import React from "react";
import FunctionalClickCounter from "./components/FunctionalClickCounter";

function App() {
  return (
    <div>
      <FunctionalClickCounter initialValue={6} />
      <FunctionalClickCounter initialValue={10} />
      <FunctionalClickCounter initialValue={4} />
    </div>
  );
}

export default App;
