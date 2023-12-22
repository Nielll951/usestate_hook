import { useState } from "react";

function App() {
  // Two properties(count and theme) in an object
  // const [state, setState] = useState({ count: 4, theme: 'blue'}) //initial state is an object
  // const count = state.count
  // const theme = state.theme
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('red')
    // setState(prevState => {
    //   return { ...prevState, count: prevState.count - 1 } //use spred operator for updating just one property 'count'
    // })
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
     <button onClick={decrementCount}>-</button> 
     <span>{count}</span> 
     <span>{theme}</span>
     <button onClick={incrementCount}>+</button> 
    </>
  );
}

export default App;

//hook can be used only inside function components
//useState always returns an array with two values(initial value(state) and function, that updates value(state))
