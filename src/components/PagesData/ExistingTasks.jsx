import React from 'react'
import { useAppContext } from '../context/Appcontext'
import Cardtask from '../Components/Cardtask'
// import Addtodo from '../Components/Addtodo'

function ExistingTasks() {

  const {getList} = useAppContext()
  console.log(getList);
   

  return (
    
<div className='flex flex-col justify-center items-center gap-4 py-4'>
         {/* <Addtodo /> */}
        <div className='grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-16 pt-10'>
         <Cardtask myStyle={"bg-lime-500"} content={'Understood Topic'} type={'doFirst'}/>
         <Cardtask myStyle={"bg-orange-500"} content={'Not Clear Topic'} type={'delegate'}/>
         <Cardtask myStyle={"bg-blue-500"} content={'Not Understood Topic'} type={'eliminate'}/>
         <Cardtask myStyle={"bg-red-500"} content={'Need to check again'} type={'doLater'}/>
        </div>
    </div>
  )
}

export default ExistingTasks