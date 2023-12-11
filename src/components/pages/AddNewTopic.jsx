import React from "react";

function AddNewTopic() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Add New Topic </h2>

        <label className="form-control w-full max-w-xs">
        {/* Add a Topic */}
          <br />
          <input
            type="text"
            placeholder="Add a Topic*"
            required
            className="input input-bordered input-info w-full max-w-xs"
          />

          <br />
          {/* Choose the option */}
          <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Choose the option*
            </option>
            <option>Understood Topic</option>
            <option>Not Clear Topic</option>
            <option>Not Understood Topic</option>
            <option>Need to check again</option>
          </select>

          <br />
          {/* Plugins */}
          <input
            type="text"
            placeholder="Enter the Plugins..."
            className="input input-bordered input-info w-full max-w-xs"
          />

          <br />
          {/* Reference links */}
          <input
            type="text"
            placeholder="Enter the Reference Links..."
            className="input input-bordered input-info w-full max-w-xs"
          />

          <br />
          {/* Excerise links */}
          <input
            type="text"
            placeholder="Enter the Excerise links..."
            className="input input-bordered input-info w-full max-w-xs"
          />

          <br />
          {/* code file */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Add a code file</span>
            </div>
            <input
              type="file"
              className="file-input file-input-info w-full max-w-xs"
            />
          </label>

        <br />  
        {/* descp  */}
          <textarea
            className="textarea textarea-info"
            placeholder="Description..."
          ></textarea>

          <br />


          {/* Add Screenshot */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Add Screenshot</span>
            </div>
            <input
              type="file"
              className="file-input file-input-info w-full max-w-xs"
            />
          </label>

       <br />
       {/* Submit */}
        <div className="card-actions justify-center">
          <button className="btn btn-primary ">Submit Now</button>
        </div>

</label>
      </div>
    </div>

  );
}

export default AddNewTopic;
