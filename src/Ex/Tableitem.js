import React from 'react'

const Tableitem=({itemval,amount,cat})=>{
    return(
        <div className="items">
            <li>{itemval}</li>
            <li>{amount}</li>
            <li>{cat}</li>
        </div>
    )
}

export default Tableitem