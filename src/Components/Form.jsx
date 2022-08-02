import React from 'react'
import {useState} from 'react'
import './Form.css'
import iconError from '../assets/images/icon-error.svg'
    
function Form() {

    
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        emailAdress: '',
        password: ''
    })

    const handleFirstName = (e) => {
        setValues({...values, firstName: e.target.value})
    }
    const handleLastName = (e) => {
        setValues({...values, lastName: e.target.value})
    }
    const handleEmailAdress = (e) => {
        setValues({...values, emailAdress: e.target.value})
    }
    const handlePassword = (e) => {
        setValues({...values, password: e.target.value})
    }

    //Validating the form. I first select the errors that i want to show up, and then, if the error exists, it shows in the screen, then it's removed if the error no longer exists
    
    let firstNameError = document.getElementById('firstNameError')
    let lastNameError = document.getElementById('lastNameError')
    let emailError = document.getElementById('emailError')
    let passwordError = document.getElementById('passwordError')
    
    const validate = e => {
        // This is a Variable that serves for the FINAL validation, if the variable is turns true, then the form can't be sent

        let erros = false

        e.preventDefault()

        // First Name
        if(values.firstName === ''){
            document.getElementsByName('firstName')[0].classList.add('error')
            firstNameError.classList.remove('d-none')
            document.getElementsByClassName('iconError')[0].classList.remove('d-none')
            erros = true
          
        }  else {
            erros = false
            document.getElementsByName('firstName')[0].classList.remove('error')
            firstNameError.classList.add('d-none')
            document.getElementsByClassName('iconError')[0].classList.add('d-none')
        }

        // Last Name
        if(values.lastName === ''){
            erros = true
            lastNameError.classList.remove('d-none')
            document.getElementsByName('lastName')[0].classList.add('error')
            document.getElementsByClassName('iconError')[1].classList.remove('d-none')
            
        } else {
            erros = false
            lastNameError.classList.add('d-none')
            document.getElementsByName('lastName')[0].classList.remove('error')
            document.getElementsByClassName('iconError')[1].classList.add('d-none')
            
        }

        // Email
        // i tried to use regex in a lot of ways, this was the only one that worked for me
        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
          }

        if(!isValidEmail(values.emailAdress)){
            erros = true
            emailError.classList.remove('d-none')
            document.getElementsByName('emailAdress')[0].classList.add('error')
            document.getElementsByClassName('iconError')[2].classList.remove('d-none')
        } else {
            erros = false
            emailError.classList.add('d-none')
            document.getElementsByName('emailAdress')[0].classList.remove('error')
            document.getElementsByClassName('iconError')[2].classList.add('d-none')
        }
        //Password

        if(values.password === ''){
            erros = true
            passwordError.classList.remove('d-none')
            document.getElementsByName('password')[0].classList.add('error')
            document.getElementsByClassName('iconError')[3].classList.remove('d-none')
        } else {
            
            erros = false
            passwordError.classList.add('d-none')
            document.getElementsByName('password')[0].classList.remove('error')
            document.getElementsByClassName('iconError')[3].classList.add('d-none')
        }
        
    }

  
    //Updating ALL the inputs classes while testing was taking a lot of time, so i decided to make this variable that works for all the inputs, it was better for testing, and i guess it makes it easier to read, since all the inputs have the same classes 

    const formFieldClasses = "form-field px-4 rounded py-3 my-2 text-left col-lg-11"

    

  return (
    <div className='form-container rounded mx-4 mb-3'>
        <form className='py-3 mx-3' name='Form'
        onSubmit={validate}> 
                <input  
                name='firstName'
                onChange={handleFirstName}
                value={values.firstName}
                placeholder= "First Name"
                className={formFieldClasses} />
                <p className='col-lg-11 px-2 d-none' id='firstNameError'> First name cannot be empty </p>
                <img src={iconError} alt='' className='iconError d-none'/>
 
                <input
                name='lastName'
                onChange={handleLastName}
                value={values.lastName}
                placeholder='Last Name'
                className={formFieldClasses}/>
                <p className='col-lg-11 px-2 d-none' id='lastNameError'> Last name cannot be empty </p>
                <img src={iconError} alt='' className='iconError d-none'/>

                <input
                name='emailAdress'
                onChange={handleEmailAdress}
                value={values.emailAdress}
                placeholder='Email Adress'
                className={formFieldClasses}/>
                <p className='col-lg-11 px-2 d-none' id='emailError'> Not a valid Email </p>
                <img src={iconError} alt='' className='iconError d-none'/>

                <input
                name='password'
                onChange={handlePassword}
                value={values.password}
                placeholder='Password'
                className={formFieldClasses}/>
                <p className='col-lg-11 px-2 d-none' id='passwordError'> Password cannot be empty </p>
                <img src={iconError} alt='' className='iconError d-none'/>


            <button className='button-submit my-2 rounded py-3 col-lg-11'
            onClick={validate}>
                CLAIM YOUR FREE TRIAL
            </button>

            <div className='terms mx-3 my-1 text-center'>By clicking the button you are agreeing to our <span> Terms and Services </span></div>
            
        </form>
        
        

    </div>
  )
}

export default Form