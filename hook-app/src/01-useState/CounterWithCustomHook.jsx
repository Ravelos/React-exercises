import { useCounter } from "../hooks/useCounter"


const CounterWithCustomHook = () => {

    const{counter} = useCounter();

  return (
    <>
        <h1>Counter with hook: {counter} </h1>
        <hr />
        <button className="btn btn-primary" >+1</button>
        <button className="btn btn-secondary" >Reset</button>
        <button className="btn btn-primary" >-1</button>
      
    </>
  )
}

export default CounterWithCustomHook
