import time, { add,sub,mul,div } from './components/MyApp';

const a = 50;
const b = 20;

function App() {
  return (
    <>
      <h1>Time : {time}</h1>
      <h2>Sum of {a} and {b} is {add(a,b)}</h2>
      <h2>Subtraction of {a} and {b} is {sub(a,b)}</h2>
      <h2>Multiplication of {a} and {b} is {mul(a,b)}</h2>
      <h2>Division of {a} and {b} is {div(a,b)}</h2>
    </>
  );
}

export default App;
