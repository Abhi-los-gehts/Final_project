import React from 'react'
import { useAppContext } from '../context/Appcontext'
import Inputdata from './Inputdata'

function Addtodo() {
    const {addTodo} = useAppContext()


     function submitHandler(e) {
        e.preventDefault()
        const todo = {
     todo: e.target.todo.value,
            time: e.target.time.value ? String(e.target.time.value) : '',
            status: 'aktive',
            date_todo: e.target.date.value ? String(e.target.date.value) : '',
            type: e.target.type.value ,
            Plugins: e.target.Plugins.value,
            ReferenceLinks: e.target.ReferenceLinks.value,
            Excerise_Links: e.target.Excerise_Links.value,
            Description: e.target.Description.value,
            Src_code:e.target.Src_code.value,
            Screen_shot:e.target.Screen_shot.value,

        }
        e.target.todo.value = ''
        addTodo(todo);
    }

  return (
    <div>
    <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-orange text-black font-bold peer-checked:bg-orange-50 peer-checked:text-black">
           Click here to Add new Topic 
        </div>
        <div className="collapse-content bg-yellow-100 text-black peer-checked:bg-orange-50 peer-checked:text-black"> 
           <Inputdata submitType={'Add'} />
        </div>

{/* <Inputdata submitType={'Add'} /> */}
    </div>

</div>
  )
}

export default Addtodo