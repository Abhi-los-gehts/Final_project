import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import animationData from "../../assets/startpage-animations.json";


function Welcome() {
  return (
    //  <div className='flex flex-col justify-center items-center gap-4 font-dancing mask mask-pentagon w-[70vw] h-[70vh] bg-yellow-50 relative pt-4 lg:pt-0'>
    <div className='min-h-screen flex items-center justify-center w-[70vw] h-[70vh]  font-dancing relative lg:pt-0'>
    <div className='text-center space-y-4 '>
    <h1 className='text-xl font-bold pt-20 text-orange-500 pb-6'>Lightweight, Interactive Planning Tool That Visualizes a Series Of Topics Covered In Classroom.</h1>
    {/* <p className='lg:text-[2em] font-marhey'>Please, login first</p> */}
    <div className='flex items-center  justify-center'>
    <Lottie animationData={animationData} loop={true}/>
    </div>
    <br />
    <Link to={'/login'} className='lg:absolute lg:bottom-[10%]'><button className="btn  text-orange-500 btn-outline glass btn-success lg:text-[2em]"> Let's Login</button></Link>
</div>
</div>


  )
}

export default Welcome