import React from 'react'
import { useAppContext } from '../context/Appcontext';
import Welcome from '../Components/Welcome';

function Startpage() {
    const { authorization } = useAppContext();
  return (
    <div className='h-[88vh] flex flex-col justify-center items-center '>
      {!authorization && <div>
            <Welcome />

          </div>}
    </div>
 
  )
}

export default Startpage