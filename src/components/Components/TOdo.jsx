import React from 'react'
import Status from './Status';
import Deletetask from './Deletetask';
import { useAppContext } from '../context/Appcontext';
import Inputdata from './Inputdata';

function TOdo({oneTodo}) {
    const {changeEditStatus} = useAppContext();
  return (
    <div className="card w-full  shadow-xl border-2 border-orange-300">

        <div className="card-body realtiv">

          { !oneTodo.editStatus ? <>
            <h2  onClick={() => {changeEditStatus(oneTodo.objectId, oneTodo.editStatus)}} className="card-title">{oneTodo.todo}</h2> 

            </> : <>
            { oneTodo.editStatus && <div className='flex flex-col items-center gap-4'> 
                <Inputdata submitType={'edit'} el={oneTodo}/>
              </div>
            }
            </>}
            {!oneTodo.editStatus && <>
              <Deletetask id={oneTodo.objectId} />
              {oneTodo.status === 'aktive' && <Status id={oneTodo.objectId}/>}
            </>}
        </div>
    </div>
  )
}

export default TOdo