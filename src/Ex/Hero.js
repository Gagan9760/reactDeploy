import React, { useEffect } from 'react'

const Hero = ({ View, setview, book, setTotal,text }) => {
    function changeView() {
        setview({ ...View, hero: false, save: true, table: false })
    }
    function details() {
        setview({ ...View, hero: false, save: false, table: true })
    }
    const allexp = book.map(item => item.amount)
    const total = (allexp.reduce((acc, item) => acc += item, 0))
    useEffect(() =>
        setTotal(total)
    );
    return (
        <div className="hero">
            <div>
                <p>Your total {text==='exp'?"expenses":"income"}</p>
                <p className="total">{total}</p>
                
            </div>
            <div className="buttons">
            <button onClick={details}>Details</button>
            <button onClick={changeView}>Add an {text==='exp'?"Expense":"Income"}</button>
            </div>
        </div>
    )
}

export default Hero