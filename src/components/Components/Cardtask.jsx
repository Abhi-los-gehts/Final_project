import React from 'react'
import { useAppContext } from '../context/Appcontext'


function Cardtask({myStyle, content, type}) {
    const {typeOfList, displayTodo} = useAppContext()

  return (
    <div >
    <div className={`${myStyle} card w-96 bg-base-100 shadow-xl`}>
      <div className="card-body">
          <h2 className="card-title">{content}</h2>
          <div className="card-actions justify-end">
          <p className='font-bold'> {displayTodo(type).length}</p>
          <button onClick={() => {typeOfList(type)}} className="btn bg-yellow-950 text-white">Check List</button>
          </div>
      </div>
    </div>
</div>
)
}


export default Cardtask