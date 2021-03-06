import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'


function SignUp () {

    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        name: "",
        country: "",
        address: "",
        email: "",
        phoneNumber: ""
    });


    useEffect(()=>{
        if (
            form.name !== "" &&
            form.country !== "" &&
            form.address !== "" &&
            form.email !== "" &&
            form.phoneNumber !== ""
         
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
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))

        toast.success(`Welcome to Yummy store, ${form.name}`)

        setTimeout(() => {
            window.location="/hm"
        }, 2000);
        
        
    }

    

    return(
        <div className="auth_signup">
            <ToastContainer />
           
            <div>
            <h1> Sign Up</h1>
                <form onSubmit={submitHandler}  >
                    
                    <input type="text" placeholder=" Name" name="name" onChange={handleChange} />
                   
                    <input type="text" placeholder=" Country" name="country" onChange={handleChange} />
                  
                    <input type="text" required placeholder="Address" name="address" onChange={handleChange} />
                   
                    <input type="email" required placeholder="Contact Email" name="email" onChange={handleChange} />
                   
                    <input type="text" required placeholder="Phone Number" name="phoneNumber" onChange={handleChange} />
                    
                    <div style={{display:"flex", alignItems:"flex-start"}}>
                        <input type="checkbox" style={{width:"25px", margin:"-7px 7px 0 0"}} id="readTerms" />
                        <p >I have read, understood and i agree to the terms and conditions</p>
                    </div>
                    <button 
                        className= {formValid?"auth_signup-active":"auth_signup-submit"}
                        // type="submit"
                        // id="actionBtn"
                        // disabled={!formValid}
                    >
                        Sign Up
                    </button>

                    <p>Already have an account?</p>
                    <Link to="/signin"> 
                     <button  className= {formValid?"auth_signin-active":"auth_signup-submit"}> Sign in</button> 
                    </Link> 

                </form>
            </div>

        </div>
    )
}

export default SignUp;
