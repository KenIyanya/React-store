import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'


function SignIn () {

    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: ""
    });


    useEffect(()=>{
        if (
            
            form.email !== "" &&
            form.password !== ""
         
        ){
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [form])

   

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
      
        let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))

        if (form.email === userDetails.email){
            toast.success(`Welcome to Yummy store, ${userDetails.name}`)

        setTimeout(() => {
            window.location="/hm"
        }, 2000);
        } else {
            toast.error('User does not exist, Signup')
        }

        
        
        
    }

    

    return(
        <div className="auth_signup">
            <ToastContainer />
           
            <div>
            <h1> Sign In</h1>
                <form onSubmit={submitHandler}  >
                    
                    <input type="email" required placeholder="Contact Email" name="email" onChange={handleChange} />
                    <p> {form.email} </p>
                    <input type="password" required placeholder="password" name="password" onChange={handleChange} />
                    <p> {form.password} </p>
                    <div style={{display:"flex", alignItems:"flex-start"}}>
                        <input type="checkbox" style={{width:"25px", margin:"-7px 7px 0 0"}} id="readTerms" />
                        <p >I have read, understood and i agree to the terms and conditions</p>
                    </div>
                    <button 
                        className= {formValid?"auth_signin-active":"auth_signin-submit"}
                        // type="submit"
                        // id="actionBtn"
                        // disabled={!formValid}
                    >
                        Sign In
                    </button>

                    <p>Don't have an account?</p>
                    <Link to="/signup"> 
                     <button  className= {formValid?"auth_signup-active":"auth_signup-submit"}> Sign up</button> 
                    </Link>
                    

                </form>
            </div>

        </div>
    )
}

export default SignIn;