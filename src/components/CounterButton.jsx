export default function CounterButton({by,incrementMethod,decrementMethod}){

    return(
        <div className="Counter">
            <div>

            <button className="countButton"
                    onClick={() =>incrementMethod(by)}
            >+{by}
            </button>
            <button className="countButton" 
                    onClick={() =>decrementMethod(by)}
            >-{by}
            </button>

            </div>
        </div>
        
    )

}