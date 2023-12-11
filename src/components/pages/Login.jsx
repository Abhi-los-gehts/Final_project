import React from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
// const navigate= useNavigate()

//     if(user){
//         navigate('/')

//     }

  return (
    <div>

<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.pinimg.com/474x/84/a2/32/84a232b32e4de5e28857e830ac18b330.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <br />
    <br />
    <br />
    <br />

    <h2 className="card-title justify-center">Login</h2>
    <br />
    <br />

    <input type="email" required placeholder="Enter Email-ID..." className="input input-bordered input-info w-full max-w-xs" />
<br />
    <input type="password" required placeholder="Enter Password..." className="input input-bordered input-info w-full max-w-xs" />

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login