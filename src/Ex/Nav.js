import React from 'react'

const Nav = ({view,setView}) => {
    function savingView(){
        setView({
            ...view,sav:true,exp:false,inc:false
        })
    }
    function incomeView(){
        setView({
            ...view,sav:false,exp:false,inc:true
        })
    }
    function expensesView(){
        setView({
            ...view,sav:false,exp:true,inc:false
        })
    }
    return (
        <div className="nav-bar">
            <div className="logo">Wallet!!!</div>
            <ul className="nav-list">
                <li onClick={expensesView}>Expense</li>
                <li onClick={incomeView}>Income</li>
                <li onClick={savingView}>Saving</li>
            </ul>
        </div>
    )
}

export default Nav