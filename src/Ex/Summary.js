import React, {useState} from 'react'
import Table from './Table'
import Hero from './Hero'
import Add from './Add'

const Summary=({book,setBook,setTotal,text})=>{
    const[View,setview]=useState({hero:true,save:false,table:false})
    const{hero,save,table}=View
    return (<div className="summary">
        {hero && <Hero View={View} setview={setview} book={book} setTotal={setTotal} text={text} />}
        {save && <Add View={View} setview={setview} book={book} setBook={setBook} text={text}/>}
        {table && <Table View={View} setview={setview} book={book}/>}
    </div>
    )
}

export default Summary