import React, { useState } from 'react'
import Nav from './Nav'
import './ex.css'
import Saving from './Saving'
import Summary from './Summary'

const Main = () => {
  const [view, setView] = useState({
    sav: false,
    exp: false,
    inc: false
  });
  const [book, setBook] = useState([])
  const [Ibook, setIBook] = useState([])
  const [totalExp, setTotalExp] = useState(0)
  const [totalInc, setTotalInc] = useState(0)
  const { sav, exp, inc } = view
  return (
    <div>
      <Nav view={view} setView={setView} />
      {sav && <Saving totalExp={totalExp} totalInc={totalInc} />}
      {exp && <Summary book={book} setBook={setBook} setTotal={setTotalExp} text="exp" />}
      {inc && <Summary book={Ibook} setBook={setIBook} setTotal={setTotalInc} text="inc" />}
    </div>
  )
}

export default Main