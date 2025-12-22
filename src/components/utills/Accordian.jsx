import React, { useState } from 'react'
import ListItems from './ListItems'

const Accordian = ({ title,setOpen,open }) => {
  //  const showItemlist=()=>{
  //     setOpen()
  //  }

  return (
    <div className='accordian'>
      <div className="list_container">
        <div className="accordian_container" onClick={setOpen}>
          <button>{open ? "-" : "+"}</button>
          <p>{title}</p>
        </div>
        {open && <ListItems />}

      </div>

    </div>
  )
}

export default Accordian