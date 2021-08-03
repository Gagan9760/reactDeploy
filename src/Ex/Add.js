import React,{useState} from 'react'

const Add = ({View,setview,book,setBook}) =>{
    const[text,setText]=useState('');
    const[amount,setAmount]=useState('');
    let cat
    function changeView(){
        setview({...View,hero:true,save:false,table:false})
    }
    function textHandler(e){
        setText(e.target.value);
    }
    function amountHandler(e){
        var a = 0
        a = Number(e.target.value)
        setAmount(a);
    }
    function catChange(e){
        cat = e.target.selectedOptions[0].innerHTML;
    }
    function save(e){
        e.preventDefault();
        setBook([...book,{
            val: text,
            amount: amount,
            cat: cat,
        }])
        setText('');
        setAmount('');
    }
    return(
        <div className="addition">
        <button className="back" onClick={changeView}>Go back</button>
        <form onSubmit={save} className="form">
            <input value={text} onChange={textHandler} placeholder="Enter the nature"></input>
            <input value={amount} onChange={amountHandler} placeholder="Enter the amount"></input>
            <select onChange={catChange}>
                <option>Medical</option>
                <option>Entertainment</option>
                <option>Groceries</option>
                <option>Others</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Add