import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);
  return (
    <>
    <p class="text-4xl text-red-400 tracking-widest">
    The Count is {count()}</p>
    
    <button class="btn btn-blue" onClick={() => setCount(count() + 1)}>
      Counter
    </button>
    </>
  )
}

export default App;
