import { useState } from 'react'
import './Counter.css'

export default function Counter(){
    const [count,setCount] = useState(0)
    function incrementCounterParentFunction(by){
        setCount(count + by)

    }
    function decrementCounterParentFunction(by){
        setCount(count - by)

    }
    
    return(
        <>
        <span className="totalCount">{count}</span>
        <CounterButton by = {1} 
            incrementMethod ={incrementCounterParentFunction}
            decrementMethod = {decrementCounterParentFunction}/>
        <CounterButton by = {2}
            incrementMethod ={incrementCounterParentFunction}
            decrementMethod = {decrementCounterParentFunction}/>
        <CounterButton by = {5} 
            incrementMethod ={incrementCounterParentFunction}
            decrementMethod = {decrementCounterParentFunction}/>
      </>
    )
}

function CounterButton({by,incrementMethod,decrementMethod}){

    const [count,setCount] = useState(0)

    function incrementCounterFunction(){
        setCount(count + by)
        incrementMethod(by)

    }
    function decrementCounterFunction(){
        setCount(count - by)
        decrementMethod(by)

    }
    return(
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>

            <button className="countButton"
                    onClick={incrementCounterFunction}
            >{count}
            </button>
            <button className="countButton" 
                    onClick={decrementCounterFunction}
            >{count}
            </button>

            </div>
        </div>
        
    )

}
