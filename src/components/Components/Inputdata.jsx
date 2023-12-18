import React, { useState } from "react";
import { useAppContext } from "../context/Appcontext";
// import { Dropzone, FileMosaic } from "@dropzone-ui/react";

function Inputdata({ submitType, el }) {
  

  // const [files1, setFiles1] = useState([]);

  // const updateFiles = (incommingFiles) => {
  //   setFiles(incommingFiles);
  // };

  // const updateFiles1 = (incommingFiles1) => {
  //   setFiles1(incommingFiles1);
  // };

  const { updateTodo, addTodo } = useAppContext();

  function submitHandler(e) {
    e.preventDefault();
    

    if (submitType === "Add") {
      console.log('Add');
      const todo = {
        todo: e.target.todo.value,
        Plugins: e.target.Plugins.value,
        ReferenceLinks: e.target.ReferenceLinks.value,
        Excerise_Links: e.target.Excerise_Links.value,
        Description: e.target.Description.value,
        // Screen_shot: e.target.Screen_shot.files1[0],
        // Src_code:e.target.Src_code.files[0],
        // time: e.target.time.value ? String(e.target.time.value) : "",
        status: "aktive",
        // date_todo: e.target.date.value ? String(e.target.date.value) : "",
        type: e.target.type.value,
      };
      e.target.todo.value = "";
      addTodo(todo);
      alert('Added Successfully')
    } else {
      const todoNew = {
        objectId: el.objectId,
        editStatus: !el.editStatus,
        todo: e.target.todo.value,
        // time: e.target.time.value ? String(e.target.time.value) : el.time,
        // date_todo: e.target.date.value ? String(e.target.date.value) : el.date_todo,
        type: e.target.type.value,
        Plugins: e.target.Plugins.value,
        ReferenceLinks: e.target.ReferenceLinks.value,
        Excerise_Links: e.target.Excerise_Links.value,
        Description: e.target.Description.value,
        // Screen_shot:e.target.Screen_shot.files1[0],
        // Src_code:e.target.Src_code.files[0],
      };
      updateTodo(todoNew);
    }
  }
  
   


  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Add New Topic </h2>

        <form
          action=""
          className="flex flex-col items-center  gap-4 lg:w-96"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Enter New Topic"
            name="todo"
            className="input input-bordered input-warning w-full h-12 pl-[20vw] lg:pl-[6vw]"
            defaultValue={submitType === "edit" ? el.todo : ""}
            required
          />
          
          <select className="select select-warning w-full max-w-8" name="type">
            <option disabled selected value={"doFirst"}>
                    Choose the Options
            </option>
            <option value={"doFirst"}>Understood Topic</option>
            <option value={"delegate"}>Not Clear Topic</option>
            <option value={"eliminate"}>Not Understood Topic</option>
            <option value={"doLater"}>Need to check again</option>
          </select>

          <input
            type="text"
            placeholder="Enter the Plugins..."
            name="Plugins"
            className="input input-bordered input-warning w-full h-12 pl-[20vw] lg:pl-[6vw]"
          />
          <input
            type="text"
            placeholder="Enter the Reference Links..."
            name="ReferenceLinks"
            className="input input-bordered input-warning w-full h-12 pl-[20vw] lg:pl-[6vw]"
          />
          <input
            type="text"
            placeholder="Enter the Excerise links..."
            name="Excerise_Links"
            className="input input-bordered input-warning w-full h-12 pl-[20vw] lg:pl-[6vw]"
          />

           {/* Add Src code */}
          {/* <label className="form-control w-full max-w-xs">
            <span className="label-text">Add a source code file</span>

            <Dropzone className="upload" onChange={updateFiles} value={files} name="Src_code" >
              {files.map((file) => (
                <FileMosaic {...file} preview />
              ))}
            </Dropzone>
          </label> */}

          {/* Add Screenshot */}
          {/* <label className="form-control w-full max-w-xs">
            <span className="label-text">Add Screenshot</span>

            <Dropzone className="upload" onChange={updateFiles1} value={files1} name="Screen_shot" >
              {files1.map((file) => (
                <FileMosaic {...file} preview />
              ))}
            </Dropzone>
          </label> */}

          <textarea
            type="textarea"
            placeholder="Enter the Description..."
            name="Description"
            className="input input-bordered input-warning w-full h-12 pl-[20vw] lg:pl-[6vw]"
          />

          <button className="btn btn-accent w-[50%] bg-yellow-950 text-white" >
            {submitType}
          </button>
        </form>
      </div>
    </div>
  );
}


export default Inputdata;
