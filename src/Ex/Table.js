import React from 'react'
import Tableitem from './Tableitem'


const Table = ({View,setview,book})=>{
    function changeView(){
        setview({...View,hero:true,save:false,table:false})
    }
    return(
        <div className="table">
               <button className="back" onClick={changeView}>Go back</button>
        <ul>
            <li>Nature</li>
            <li>Amount</li>
            <li>Category</li>
        </ul>
        {book.map((item)=><Tableitem itemval={item.val} amount={item.amount} cat={item.cat}/>)}
        
        </div>
    )
}

export default Table