import React from 'react'
import { BsBank } from "react-icons/bs";

const FilterProduct = ({category,onClick}) => {
  return (
    <div onClick={onClick}>
    <div className='text-3xl p-5 bg-blue-600 hover:bg-blue-400 rounded-full cursor-pointer'>
    <BsBank />
    </div>
    <p className='text-center font-medium my-1 capitalize'>{category}</p>
    
    </div>
  )
}

export default FilterProduct