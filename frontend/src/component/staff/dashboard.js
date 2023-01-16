import axios from 'axios';
import { Link } from 'react-router-dom';


const Dashboardstaff = () => {
    return (
        <>
        <div>
        <div class="main_page">
        <div class="container">

            </div>

            <div class="dash container">
                <div class="row max-auto">
                        <div class="col">
                            <div class="">
                                <Link to='/staff/addproduct'>
                                    <button class="btn btn-primary">Add Product</button>
                                </Link>
                            </div>
                            <div class="col">
                            <div class="">
                                <Link to='/staff/staffregister'>
                                    <button class="btn btn-primary">Add Staff</button>
                                </Link>
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

export default Dashboardstaff