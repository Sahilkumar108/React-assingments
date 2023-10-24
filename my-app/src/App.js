import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function cli(){
     setCount(count+1);
   }
  return (
   <>
    <button onClick={cli}>Click me!</button>
    <p>You clicked {count} times</p>
   </>
  );
}

export default App;
