import { useState } from 'react'
import './Counter.css'

export default function counter(){
    const [count,setCount] = useState(0)
 
    return(
        
        <>
        <span className="count">{count}</span>
        <CounterButton by = {1}/>
        <CounterButton by = {2}/>
        <CounterButton by = {5}/>
      </>
    )
}

function CounterButton({by}){

  

    function incrementCounterFunction(){
        setCount(count + by)

    }
    function decrementCounterFunction(){
        setCount(count - by)

    }
    return(
        <div className="Counter">
            
            <div>

            <button className="countButton"
                    onClick={incrementCounterFunction}
            >+1
            </button>
            <button className="countButton" 
                    onClick={decrementCounterFunction}
            >-1
            </button>

            </div>
        </div>
        
    )

}
