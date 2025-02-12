import React, { useRef } from 'react';
import Button from "../components/button"
import Input from "../components/inputs"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register(){
    
    const formRef = useRef();

    const [password, setPassword] = useState('')
    const [reppassword, setrepPassword] = useState('')

    const mailrgx = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{4,}\.[a-zA-Z]{3,}$/
    const passrgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const namergx = /^[A-Za-z]{3,}$/;

    const navigate = useNavigate();

    

    const checkinp = (e) => {

        const value = e.target.value;
        if (e.target.id === "mail")
        {
            if (mailrgx.test(value)) 
                {  
                e.target.className = "form-control is-valid"
                } 
                else 
                {
                e.target.className = "form-control is-invalid"
                }
        }
        else if (e.target.id === "name")
        {
            if (namergx.test(value)) 
            {  
            e.target.className = "form-control is-valid"
            } 
            else 
            {
            e.target.className = "form-control is-invalid"
            }
        }  
        else if (e.target.id === "password")
        {
            if (passrgx.test(value))
            {  
            e.target.className = "form-control is-valid"
            } 
            else 
            {
            e.target.className = "form-control is-invalid"
            }
        }
        else if (e.target.id === "passwordcon")
        {
            if ((password === reppassword) && (reppassword))
            {  
            e.target.className = "form-control is-valid"
            } 
            else 
            {
            e.target.className = "form-control is-invalid"
            }
        }
    }

    const resetval = (e) => {

        const value = e.target.value;
        
            if (value === "") 
            {
                e.target.className = "form-control"
            }     
    }

    const storeval = (e) => {

        const value = e.target.value;
        if (e.target.id === "password")
            {
                setPassword(value)
            } 
        else if (e.target.id === "passwordcon")  
            {
                setrepPassword(value)
            }      
    }

    const valall = () => {
        const formElements = formRef.current.elements;

        for (let element of formElements) {
            const e = 
            {
              target: element
            }
            checkinp(e)
        }
    }
    
    const changepage = () => {
        navigate('/login');
    }

    return(
        <>
            <form class="needs-validation m-5" novalidate style={{width: '25%', border: "1px solid black", padding: "20px", borderRadius: '10px'}} onSubmit={(e) => e.preventDefault()} ref={formRef}>
                <div className="" >
                    <h1 style={{textAlign: "center"}}>Register</h1>
                    
                    <Input idn="name" inlabl="Name" intype="text" valmsg="looking good" invalmsg="please enter a valid User name" blurfun={checkinp} chgfun={resetval}/>


                    <Input idn="mail" inlabl="E-mail" intype="text" valmsg="looking good" invalmsg="please enter a valid email" blurfun={checkinp} chgfun={resetval}/>


                    <Input idn="password" inlabl="Password" intype="password" valmsg="looking good" invalmsg="Password must be at least 8 characters, have lower and upper letters at least 1 " blurfun={checkinp} chgfun={storeval}/>

                    <Input idn="passwordcon" inlabl="Confirm Password" intype="password" valmsg="looking good" invalmsg="Passwords don't match" blurfun={checkinp} chgfun={storeval}/>


                    <div className='d-flex' style={{justifyContent: 'space-between'}}>
                        <Button bclr="success" title1="Register" mar="15px" clck={valall}/>
                        <Button bclr="primary" title1="login" clck={changepage}/>
                    </div>
                </div>
            </form>
        </>
    )

    

}

export default Register