import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TOdo from '../Components/TOdo';
import { useAppContext } from '../context/Appcontext';

function  SurpriseMe () {
  const {typeList,todos, getList, displayTodo} = useAppContext()
  const todosList = displayTodo[typeList]

  const [tsk, settsk] = useState();

useEffect(()=>{
getList()
},[])

  const generateRandomTask = () => {
    
    // getlist has no return getlist[randomIndex]
    //  todos was not imported or send from app contxt
    //  cannot render all object in html

    const randomIndex = Math.floor(Math.random() * getList.length);
    let selectedTask = todos[randomIndex];
    console.log(selectedTask);
    settsk(i=>selectedTask);  
  };

  const displayTasks = () => {
    return (
      <div>
        <ul>
          {todosList &&  todosList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  };

        return ( 
            <div className="card w-96 h-48 bg-primary text-primary-content pt-6">
            <div className="card-body">
              <h2 className="card-title"></h2>

              <div className="card-actions justify-end">
              { tsk && <div>Surprise the topic is: {tsk.todo}</div>}
              {displayTasks()}
              <Link to='/SurpriseMe' >
              <button className="btn" onClick={generateRandomTask}> Click Me to Generate Random Task </button>
              
              </Link>

             </div>
       </div>
      </div> 
            
   
  )
}

export default SurpriseMe



            

         