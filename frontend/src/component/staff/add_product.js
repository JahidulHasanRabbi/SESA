import { useEffect, useState } from 'react';
import { Link, useFormAction, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useCookies } from 'react-cookie';
import './style.css'



const AddProdcut = () => {

    
    const maincatagory = [
        {value : "smartphone", label : "SmartPhone"},
        {value : "computer", label : "Computer and Acessory"},
        {value : "electronic", label : "Electronic"},
        {value : "woman", label : "Woman's Fasion"},
        {value : "man", label : "Man's Fasion"},
        {value : "home", label : "Home and Beauty"}
    ]

    const catagroy = {
        "smartphone": [
            {value: "nokia", label:"Nokia"},
            {value: "samsung", label:"Samsung"},
            {value: "apple", label:"Apple"},
            {value: "mi", label:"Mi"},
            {value: "oppo", label:"Oppo"}
        ],
        "computer": [
            {value: "laptop", label:"Laptop"},
            {value: "desktop", label:"Desktop"},
            {value: "allinonepc", label:"All In One Pc"},
            {value: "accessory", label:"Accessory"},
            {value: "gaming", label:"Gaming"}
        ],
        "electronic": [
            {value: "home_application", label:"Home Applications"},
            {value: "kitchen_applicaton", label:"Kitchen Application"},
        ],
        "woman": [
            {value: "tops", label:"Tops"},
            {value: "winter_cloth", label:"Winter Cloth"},
            {value: "hoodies", label:"Hoodies"},
            {value: "accessory", label:"Accessory"}
        ],
        "man": [
            {value: "tshirt", label:"Tshirt"},
            {value: "winter_cloth", label:"Winter Cloth"},
            {value: "hoodies", label:"Hoodies"},
            {value: "accessory", label:"Accessory"},
            {value: "man_shoe", label:"Man Shoe"},
        ],
        "home": [
            {value: "gromming", label:"Gromming Product"},
            {value:"Trimmer", label:"Trimmer & shaver"},
            {value:"women_watch", label:"Women's watch"}
        ]
    }
    const navigate = useNavigate()

    const [alert, setAlert] = useState(false)


    const [Product, setProduct] = useState({
        
        brand:"",
        name:"",
        price:"",
        stock:"",
        fileToUpload:""
    });

    const [Listcatagory, setListcatagory] = useState('')
    const [Listmaincatagory, setListmaincatagory] = useState('')


    const handleselectchange = (e) => {
        const mainc = e.target.value
        const ca = e.target.value
        setListmaincatagory(mainc)
        setListcatagory(ca)
    }

    console.log(Product)
    const handlechange = (e) => {
        const {name, value} = e.target;
        setProduct(() => {
            return { [name]: value}
        })

        console.log('HandleChange')
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        const brand = Product.brand
        const prodcut_name = Product.name
        const stock = Product.stock
        const main_catagory = Listmaincatagory
        const catagroy = Listcatagory
        const image = Product.fileToUpload

        const response = await axios.post('http://127.0.0.1:8000/api/product/add/', {
            "main_catagory":main_catagory,
            "catagory":catagroy,
            "product_name":prodcut_name,
            "stock":stock,
            "brand":brand,
            "image":image

        }).then(res => { 
            navigate('/staff/addproduct')
            console.log(res.data)
        }).catch(err => {
                console.log(err)
                navigate('/staff')
                setAlert(true)
            })
    }
    

    return (
        <>
        <div>
            <section class="ftco-section">
                
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="row justify-content-center">
                            <div class="col-md-8 col-lg-5">
                                <form onSubmit={handlesubmit}>
                                    <div class="select">
                                        <div class="form-group">
                                        {alert ? <Alert  variant="filled" severity='error'>
                                Wrong Email or Password!
                                </Alert> : <></> }
                                            <label for="price" class="label">
                                                    Select Main Catagroy
                                            </label>
                                        </div>
                                        <select
                                        onChange={handlechange}
                                        name="maincatagory" 
                                        class="form-select"  
                                        closeMenuOnSelect={false}
                                        aria-label="Default select example"
                                        value={Listmaincatagory}
                                        >
                                            <option>Select Main Catagory</option>
                                            {
                                                maincatagory.map(state=> {
                                                    return <option value={state.value}>{state.label}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div class="select">
                                        <div class="form-group">
                                            <label for="catagroy" class="label">
                                                    Select Catagory
                                            </label>
                                        </div>

                                        <select
                                        onChange={handlechange}
                                        name ="catagroy"
                                        className="form-select"
                                        value={Listcatagory}
                                        aria-label="Default select example">

                                            <option>Select Catagory</option>
                                            {
                                                Product.maincatagory &&
                                                catagroy[Product.maincatagory].map(state => {
                                                    return <option value={state.value}>{state.label}</option>
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="Brand" class="label">
                                            Brand Name
                                        </label>
                                    </div>

                                    <div class="control">
                                        <input 
                                            name="brand" 
                                            onChange={handlechange}
                                            class="form-control" 
                                            placeholder="Brand Name" 
                                            required autofocus>
                                        </input>
                                    </div>



                                    <div class="form-group">
                                        <label for="Name" class="label">
                                            Product Name
                                        </label>
                                    </div>

                                    <div class="control">
                                        <input 
                                            type="Name" 
                                            name="name" 
                                            onChange={handlechange}
                                            class="form-control" 
                                            placeholder="Product Name" 
                                            required autofocus>
                                        </input>
                                    </div>  

                                    <div class="form-group">
                                        <label for="price" class="label">
                                                Price
                                        </label>
                                    </div>

                                    <div class="control">
                                        <input 
                                        type="Price" 
                                        name="price" 
                                        onChange={handlechange}
                                        class="form-control" 
                                        placeholder="Price" 
                                        required autofocus>
                                        </input>
                                    </div>

                                    <div class="select">
                                        <div class="form-group">
                                            <label for="stock" class="label">
                                                Is Product Stock Avilalbe?
                                            </label>
                                        </div>
                                            
                                        <select 
                                            onChange={handlechange}
                                            name="stock" 
                                            class="form-select" 
                                            aria-label="Default select example">

                                                <option value="true">Yes</option>
                                                <option value="false">No</option>                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="file" class="form-label">Upload Product Image</label>
                                        <input                                       
                                        onChange={handlechange}
                                        name="fileToUpload" 
                                        class="form-control" 
                                        type="file" 
                                        id="fileToUpload"
                                        >
                                        </input>
                                    </div>
                                        

                                    <div class="form-group create-account text-uppercase">
                                        <a href="" class="product-add">
                                            <button class="btn btn-primary btn-block text-uppercase"
                                             name="submit" 
                                             type="submit">
                                                Add Prodcut
                                            </button>
                                        </a>
                                    </div>

                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div class="dash container">
                <div class="row max-auto">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="">
                            <Link to="/staff/account">
                                <button class="btn btn-primary">Go back to Dashboard</button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default AddProdcut