import { useState } from 'react';
import Greeter from "./Greeter";

function App() {
  const [msj, setMsj] = useState("my friend");

  function handleClick () {
    setMsj("my friend (from changed state)");
  }

  return (
    <>
      <Greeter person={msj}></Greeter>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App;
