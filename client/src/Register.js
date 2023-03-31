import React from 'react'
import {useForm} from "react-hook-form" 

function Register() {
    const {register, handleSubmit, formState:{errors}, watch,   reset} =useForm() 
    const password = watch("password")

    function postData(data){
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        console.log(data)
        reset()
    }
  return (
    <div>
        <form onSubmit={handleSubmit(postData)}>
            <div className='username'>
                <input type="text" id = "name" placeholder='Your Username' name= "username" {...register("name", {
                    required:true,
                    maxLength: 10,
                })}/><br/>
            </div>
            {errors.name && (<p>Add proper name</p>)}
            <div className='email'>
                <input type="email" id = "email" placeholder='Your Email' name= "email" {...register("email", {
                    required:true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}/><br/>
                {errors.email && (<p>Add a valid email</p>)}
            </div>
            <div className='password-confirm'>
                <input type="password" id = "password" placeholder='Your Password' name= "password" {...register("password", {
                    required:true,
                })}/>
            </div>
            {errors.password && (<p>Add a valid password</p>)}
            <div className='password'>
                <input type="password" id = "password-confirm" placeholder='Confirm your password' name= "password-confirm" {...register("passwordconfirm", {
                    validate: value =>
                    value === password || "THe passwords do not match"
                })}/><br />
                {errors.passwordconfirm && (<p>Passwords do not match</p>)}
            </div>
            <button type='submit' id="submitButton">Submit</button>
        </form>
    </div>
  )
}

export default Register