import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="main">

      {/* card1 */}
      <div className="card w-96 h-48 bg-primary text-primary-content ">
        <div className="card-body">
          <h2 className="card-title"></h2>

          <div className="card-actions justify-end">

            <Link to='/Addnewtask' >
            <button className="btn">Add New Topic</button>
            </Link>

            <Link to='/ExistingTasks' >
            
            <button className="btn">Existing Topics</button>
            </Link>

          </div>
        </div>
      </div>

      {/* card2 */}
      <div>
        <div className="card w-96 h-48 bg-primary text-primary-content ">
          <div className="card-body">
            <h2 className="card-title"></h2>

            <div className="card-actions1">

              <Link to= '/CompletedTask'>
              <button className="btn">Completed Topics</button>
              </Link>

              <Link to= '/Scheduled'>
              <button className="btn">Scheduled Task</button>
              </Link>

              <Link to= '/Deletetask'>
              <button className="btn">Deleted Topics</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* card3*/}
      <div>
        <div className="card w-96 h-48 bg-primary text-primary-content ">
          <div className="card-body">
            <h2 className="card-title"></h2>
            <div className="card-actions justify-end">
                <Link to='/SurpriseMe'>
              <button className="btn">Surprise Me</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
