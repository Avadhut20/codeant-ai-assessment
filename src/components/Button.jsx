import React from 'react'
import { useState } from 'react'
const Button = (props) => {
    return (
        <button className=" py-5 w-[350px] h-[40px] border-2 border-solid border-gray-500 rounded flex items-center justify-center space-x-2 font-secondary">
            <span>
                <img src={props.img} alt="" className="w-[25px] h-[25px]" />
            </span>
            <span>Sign in with {props.name}</span>
        </button>



    )
}

export default Button