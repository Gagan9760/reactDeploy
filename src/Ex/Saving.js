import React from 'react'

const Saving=({totalExp,totalInc})=>{
    return(
        <div className="sav">
            <h1>{`Your Total Expenses are ${totalExp}`}</h1>
            <h1>{`Your Total Income is ${totalInc}`}</h1>
            <h1>{`Your total Savings are ${totalInc-totalExp}`}</h1>
        </div>
        
    )
}

export default Saving