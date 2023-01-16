import { useEffect, useState } from 'react';
import { Link, useFormAction, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useCookies } from 'react-cookie';


const title = 'Staff Register'

const Staffregister = () => {
    const [cookies, setCookie] = useCookies(['user'])


    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    const [user, setuser] = useState({
        username:"",
        password:"",
    });

    const handlechange = (e) => {
        const {name, value} = e.target;
        setuser((prev) => {
            return {...prev, [name]: value}
        })
    }

    const Staffregisterhandler = async (e) => {
        e.preventDefault();
        const username = user.username
        const password = user.password

        const response = await axios.post('http://127.0.0.1:8000/api/staff/register/', {
            username,
            password
        }).then(res => { 
            
            console.log(res.data)
            setCookie('user', res.data.Token.access,  {path: '/' })
            localStorage.setItem('Token', res.data.Token.access)
            setAlert(true)

            }).catch(err => {
                console.log(err)
                navigate('/staff/staffregister')
               
            }
               
            )
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  

    

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
            <div class="page-title">
                <div class="-title" style={{'margin-left': '20px'}}>
                    <h4>
                        <span style={{'font-size': '17px'}}>Staff Register</span>
                    </h4>
                </div>
            </div>

            <div class="row mx-auto">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="box  my-5">
                        <div class="box-body">
                            
                            <div class="box-title">
                            {alert ? <Alert  variant="filled" severity='success'>
                                Staff Registered
                            </Alert> : <></> }
                                <span>Register Staff</span>
                            </div>
                           

                            <form onSubmit={Staffregisterhandler}  class="form-singin">
                                <div class="box-note">
                                
                                </div>
                            
                            <div class="form-Staffregister-group">
                                <label for="username" class="lable">
                                    <span>Username</span>
                                </label>
                            </div>
                            <div class="control">
                                <input 
                                    type="username" 
                                    name="username" 
                                    onChange={handlechange}
                                    id="inputusername" 
                                    class="form-control" 
                                    placeholder="username" 
                                    required autofocus>

                                    </input>
                            </div>
                            
                            <div class="form-Staffregister-group">
                                <label for="password" class="lable">
                                    <span>Password</span>
                                </label>
                            </div>
                            
                            <div class="control">
                                <input type="password" 
                                    onChange={handlechange}
                                    name="password" 
                                    id="inputpassword" 
                                    class="form-control" 
                                    placeholder="Password" 
                                    required autofocus>

                                    </input>
                            </div>
                            
                            <div class="submite">
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                                    Register
                                </button>
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


export default Staffregister