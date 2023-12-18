import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/Appcontext';
import TOdo from '../Components/TOdo';

function Onelist() {
    const {typeList, heading, displayTodo} = useAppContext();
    const todosList = displayTodo(typeList)
    // const {changeEditStatus, editStatus} = useAppContext();
  return (
    <div className='relative'>
    <Link to={'/todoList'} className='absolute top-4 right-4'> <button className="btn btn-accent w-20 bg-yellow-950 text-white">Back</button></Link>
    <div className=' lg:px-[16vw] md:px-[30vw] pt-[10vh]'>
        <div className='flex justify-between gap-6 flex-wrap'>
            <h1 className='font-bold text-center w-full text-[2em] text-yellow-900'>{heading[`${typeList}`]}</h1>
            {todosList.length > 0 && todosList.map(el => <TOdo key={el.id} oneTodo={el} />)}
        </div>
    </div>
</div>
  )
}

export default Onelist