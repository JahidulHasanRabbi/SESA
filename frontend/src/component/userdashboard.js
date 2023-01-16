import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const [user, setuser] = useState([''])

    const token = 'Bearer ' + localStorage.getItem('Token')
    // console.log(token)

    const response = async () => 
    {
        await axios.get('http://127.0.0.1:8000/api/account/', {
        headers:{
            'Authorization': token
        }
        }).then(res => {
            console.log(res.data)
            console.log('Success')
            setuser(res.data)
        }).catch (error=> {
            console.log(error.data)
        })
    }

    useEffect(() => {
        response();
      }, []);


    return (
        <>
        <div>
            <div class="main-breadcrump">
                <div class="container-fluid">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item" aria-current="page">Account</li>
                    </ol>
                </div>
            </div>

            <div class="main_page">
                

                <div class="page-title">
                    <div class="-title" style={{'margin-left': '20px'}}>
                        <h4>
                            <span style={{'font-size': '17px'}}>My Account</span>
                        </h4>
                    </div>
                </div>

                <div class="container main">
                    <div>
                        <div class="row">
                                <div class="col-2 account">
                                    <div class="style"></div>
                                    
                                    <div  class=".list-account" id="">
                                        <ul class=" list-unstyled ">
                                            <li>My Account</li>
                                            <li class="nav-item">
                                                <a href="">My Order</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="">Address Book</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="">Account Information</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="">Support Ticketr</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col style-dashboard">
                                    <div>
                                        <span>Account Information</span>
                                    </div>
                                    <div class="row style-dashboard-row">
                                        
                                        <div class="col-6 text-left">
                                            <div class="form-login-group">
                                                <label for="firstname" class="lable">
                                                    <span>First Name</span>
                                                </label>
                                            </div>
                                            <div class="input_name">
                                                <p>
                                                <span>{user.firstname}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col text-left">
                                            <div class="form-login-group">
                                                <label for="firstname" class="lable">
                                                    <span>Last Name</span>
                                                </label>
                                            </div>
                                            <div class="input_name">
                                                <p>
                                                <span>{user.lastname}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="row_style-boarder"></div>

                                    </div>
                                    <div class="row style-dashboard-row">
                                    <div class="col-6 text-left">
                                            <div class="form-login-group">
                                                <label for="firstname" class="lable">
                                                    <span>Email</span>
                                                </label>
                                            </div>
                                            <div class="input_name">
                                                <p>
                                                <span>{user.email}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
        </div>

        </div>
        </>
    )
}

export default Dashboard