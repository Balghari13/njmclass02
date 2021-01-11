import './App.css';
import Hello from "./Hello";


function App({name,age}) {
  return (
    <div>
      <h1>Hello from app.js {name} age is {(age)+5}</h1>
      <Hello firstName = {name} />
    </div>
  );
}

export default App;
