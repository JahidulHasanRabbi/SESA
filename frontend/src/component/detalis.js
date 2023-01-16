import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {


    const {id} = useParams();

    const [product, setproduct] = useState([])

    const response = async () => {
        await axios.post('http://127.0.0.1:8000/api/product/details/', {
           
                id:id
        }).then(res => {
          console.log(res.data)
          setproduct(res.data)
          console.log('Success')
      }).catch (error=> {
          console.log(error.data)
      })
    }

    useEffect(() => {
        response();
        window.scrollTo(0, 0);
      }, []);
  

    return (
        
        <div>
            {
            <div class="main_page">
                <div class="product-details">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="product-header allgn-items-center">
                                    <div class="col-sm-8">
                                        <h1 class="product-title"></h1>

                                        <ul class="metadata">
                                            <li class="brand">
                                                Brand: 
                                                <span class="brand-name-style text-uppercase">
                                                 {product.brand}
                                                </span>
                                            </li>

                                            <li class="model">
                                                Product Model : {product.main_catagory}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="social-media-post">
                                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                                            <a href="#"><i class="fab fa-whatsapp-square"></i></a>
                                            <a href="#"><i class="fab fa-twitter-square"></i></a>
                                            <a href="#"><i class="fab fa-telegram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="wrapper">
                                    <div class="product-image">
                                        <div class="main-image">
                                            <img style={{"width":"280px", "height":"300px"}} src={product.image} alt={product.product_name}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="col-a col">
                                <div class="product-must-detail">
                                    <div class="product-header">
                                        <div class="product-main-name">
                                            <div class="page-title-aa">
                                                <h1>
                                                    <span>
                                                        {product.product_name}
                                                    </span>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review">
                                        <a href="#">
                                            <p>Be first to review this product</p>
                                        </a>
                                    </div>
                                    <div class="brand-name-a">
                                        <h5>
                                            Brand: 
                                            <span class="text-uppercase">
                                                {product.brand}
                                            </span>
                                        </h5>
                                    </div>

                                    <div class="product-price">
                                        <div class="price">
                                            <h1>
                                            <span>৳{product.price}</span>
                                            </h1>
                                        </div>
                                    </div>
                                    
                                    <div class="product-stock">
                                        <div class="stock">
                                            <h5>
                                            Status : 
                                            <span class="in-stock">Yes</span>
                                            
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="warranty">
                                        <p>Warranty: 12 Months Official Warranty (One Time Replacement in Whole Warranty Period)</p>
                                    </div>

                                    <div class="control-cart">
                                        <span class="minus">
                                            <button class="btn btn-a" type="button" >-</button>
                                        </span>

                                        <input 
                                        type="number" 
                                        name="qty" 
                                        id="qty" 
                                        class="control" 
                                        maxlength="12" 
                                        value="1" 
                                        title="Qty" 
                                        min="1" 
                                        max="10">
                                            </input>
                                        <span>
                                            <button class="btn btn-a" type="button">+</button>
                                        </span>
                                    </div>

                                    <div class="button-add row">
                                        <div class="col">
                                            <a href="#">
                                                <button type="submit" title="Add Product To Cart" class="btn btn-primary bg-dark">
                                                    <span class="text-uppercase">Add To Cart</span>
                                                </button>
                                            </a>
                                        </div>

                                        <div class="col">
                                            <a href="#">
                                                <button type="submit" title="Buy Product" class="btn btn-danger">
                                                    <span class="text-uppercase">buy now</span>
                                                </button>
                                            </a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="banner">
                                    <a href="#">
                                        <img src="/image/emi.jpg" alt="" style={{"width":"200" ,"height":"200"}} ></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                    <ul id="pills-tab" class="nav nav-pills mb-3"  role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Details</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">More Information</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                    </div>
                </div>
            </div>
        </div>
        }
        </div>
    
    )
}

export default Details