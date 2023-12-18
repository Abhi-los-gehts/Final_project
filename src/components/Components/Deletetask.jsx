import React from 'react'
import { useAppContext } from '../context/Appcontext';

function Deletetask({id}) {
    const {deleteTodo} = useAppContext();
  return (
    <div> 
      <h1 className=' text text-center  font-bold'>ON Development Phase</h1>
      <button onClick={() => {deleteTodo(id)}} className="btn font-bold md:text-[1.2vw] text-[4vw] text-yellow-950  rounded-2 absolute top-5 right-5 bg-white border-amber-500">X</button></div>
  )
}
  

export default Deletetask