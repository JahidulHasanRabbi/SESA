import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const title = 'Registion'


const Register = () => {


    const [alert, setsleart] = useState({
        type: 'error',
        text: '',
        show: false
    })

    const navigate = useNavigate()

    const [user, setuser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    });

    const handlechange = (e) => {
        const {name, value} = e.target;
        setuser((prev) => {
            return {...prev, [name]: value}
        })
        console.log(user)
    }

    const registerhandler = async (e) => {
        e.preventDefault();
        const firstname = user.firstname
        const lastname  = user.lastname
        const email = user.email
        const password = user.password
        const username = email

        const response = await axios.post('http://127.0.0.1:8000/api/register/', {
            firstname,
            lastname,
            email,
            username,
            password
        }).then(res => {
           navigate('/login')
        }).catch(
            alert('Fill the Form Again with correct Informations'),
            navigate('/register'),
        )

    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    

    return (
        <>
        <div class="main-breadcrump">
            <div class="container-fluid">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item" aria-current="page">{ title }</li>
                </ol>
            </div>
        </div>


        <div class="main_page">
            <div class="car">
                <div style={{'margin-left': '20px'}} class="card-titl">
                    <h4>
                        <span style={{'font-size': '17px'}}>Create New Customer Account</span>
                    </h4>
                </div>
            </div>

            <div class="row mx-auto">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="box  my-5">
                        <div class="box-body">
                            <div class="box-title">
                                <span>Personal Information</span>
                            </div>

                            <form 
                                onSubmit={registerhandler}  
                                class="form-singin">
                            
                            <div class="form-login-group">
                                <label for="firstname" class="label">
                                    First Name 
                                </label>
                            </div>

                            <div class="control">
                                <input 
                                    type="text"  
                                    name="firstname" 
                                    onChange={handlechange}
                                    class="form-control" 
                                    placeholder="First Name" 
                                    required autofocus>
                                </input>
                            </div>

                            <div class="form-login-group">
                                <label for="lastname" class="label">Last Name</label>
                            </div>

                            <div class="control">
                            <input 
                                type="text"  
                                name="lastname" 
                                onChange={handlechange}
                                class="form-control" 
                                placeholder="Last Name" 
                                required autofocus>

                                </input>
                            </div>

                            <div class="form-login-group">
                                <label for="email" class="label">
                                        Email
                                </label>
                                </div>

                                <div class="control">
                                <input 
                                    type="email"  
                                    name="email" 
                                    onChange={handlechange}
                                    class="form-control" 
                                    placeholder="Email" 
                                    required autofocus>

                                </input>
                                </div>

                                <div class="form-login-group">
                                    <label for="password" class="lable">
                                        <span>Password</span>
                                    </label>
                                </div>
                            
                                <div class="control">
                                    <input 
                                        type="password"  
                                        name="password" 
                                        onChange={handlechange}
                                        class="form-control" 
                                        placeholder="Password" 
                                        required autofocus>

                                    </input>
                                </div>
                                
                                <div class="form-login-group">
                                    <label for="Confirm Password" class="lable">
                                        <span>Confirm Password</span>
                                    </label>
                                </div>
                            
                                <div class="control">
                                    <input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Confirm Password" 
                                    required autofocus>
                                        
                                    </input>
                                </div>

                                <div class="form-login-group create-account text-uppercase">
                                        <button 
                                        class="btn btn-primary 
                                                btn-block 
                                                text-uppercase" 
                                        type="submit">
                                            Create an account
                                        </button>
                                </div>
                            
                            
                            <div class="detail">
                                <p>
                                    <span>Or, login With</span>
                                </p>
                            </div>
                            
                            <div class="col">
                                <div class="text-uppercase">

                                    <a href="example.com" class="facebook btn"><i class="fa fa-facebook fa-fw">
                                    </i> Login With Facebook
                                    </a>
                                </div>

                                <div class="text-uppercase">
                                    <a 
                                    href="example.com" 
                                    class="google btn">
                                        <i class="fa fa-google fa-fw">
                                        </i>
                                         login with google
                                    </a>
                                </div>

                                <div class="secanfody">
                                    <p>
                                        Already have an account?
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            
                            </form>
                        </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register