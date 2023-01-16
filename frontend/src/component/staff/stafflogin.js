import { useEffect, useState } from 'react';
import { Link, useFormAction, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useCookies } from 'react-cookie';

const Stafflogin = () => {

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

    const Loginhandler = async (e) => {
        e.preventDefault();
        const username = user.username
        const password = user.password

        const response = await axios.post('http://127.0.0.1:8000/api/staff/', {
            username,
            password
        }).then(res => { 
            navigate('/staff/account')
            console.log(res.data)
            setCookie('staff', res.data.Token.access,  {path: '/' })
            localStorage.setItem('Token', res.data.Token.access)

            }).catch(err => {
                console.log(err)
                navigate('/staff')
                setAlert(true)
            }
               
            )
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <section class="ftco-section">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-5">
                            <div class="login-wrap p-4 p-md-5">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <i class="fas fa-user"></i>

                                </div>
                                {alert ? <Alert  variant="filled" severity='error'>
                                Wrong Email or Password!
                                </Alert> : <></> }

                                <h3 class="text-center mb-4">Staff Login</h3>

                                <form onSubmit={Loginhandler} class="login-form">
                                    
                                    <div class="form-group">
                                        <input onChange={handlechange} type="username" name="username" class="form-control rounded-left" placeholder="username" require autofocus>
                                            </input>
                                    </div>

                                    <div class="form-group d-flex">
                                    <input type="password" onChange={handlechange} name="password" class="form-control rounded-left" placeholder="password" require autofocus>
                                    </input>
                                    </div>

                                    <div class="form-group d-flex">
                                        <button type="submit" class="btn btn-primary rounded submit p-3 px-5" >Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Stafflogin