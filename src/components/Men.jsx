import React, { useState } from 'react'
import Accordian from './utills/Accordian'

const Men = () => {
  const category = ["Men", "Brand", "Gender", "Kids"]
  const [open, setOpen] = useState(0)
  return (
    <div className='filter'>
      <h3>Filter Options</h3>
      {
        category.map((title, i) => (
          <Accordian
            title={title}
            key={i}
            open={i === open ? true : false}
            setOpen={()=>setOpen(i)}
          />
        ))
      }


    </div>
  )
}

export default Men