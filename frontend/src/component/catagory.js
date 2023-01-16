import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Catagroy = () => {

    const {main} = useParams()
    const [Product, setProduct] = useState([])

    const response = async () => {
        
        await axios.post('http://127.0.0.1:8000/api/product/', {
            "main_catagory":main
        }).then(res => {
        console.log(res.data)
        setProduct(res.data)
        console.log('Success')
        }).catch (error=> {
        console.log(error.data)
        })
       }
    

    
    useEffect(() => {
        response()
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div class="main-page">
                <div class="container">
                    <div class="row">
                        <div class="row">
                            <div class="col-sm-3 leftSidebar " style={{"border-right": "1px solid black"}}>

                                <div class="theiaStickySidebar">
                                    <div class="sidebar-widget">
                                        <div class="slimScrollDiv">
                                            <div class="brand-filter">
                                                <h5 class="brand-name">By Brand</h5>
                                                <div class="checkbox checkbox-success">
                                                    <input type="checkbox" id="brand1" class="brand_class"></input>
                                                    <label for="brand1">
                                                        <span>Dell</span>
                                                    </label>
                                                </div>
                                                <div class="checkbox checkbox-success">
                                                    <input type="checkbox" id="brand2" class="brand_class"></input>
                                                    <label for="brand2">
                                                        <span>{main}</span>
                                                    </label>
                                                </div>
                                                <div class="checkbox checkbox-success">
                                                    <input type="checkbox" id="brand3" class="brand_class"></input>
                                                    <label for="brand3">
                                                        <span>Lenovo</span>
                                                    </label>
                                                </div>
                                                <div class="checkbox checkbox-success">
                                                    <input type="checkbox" id="brand4" class="brand_class"></input>
                                                    <label for="brand4">
                                                        <span>Msi</span>
                                                    </label>
                                                </div>
                                                <div class="checkbox checkbox-success">
                                                    <input type="checkbox" id="brand5" class="brand_class"></input>
                                                    <label for="brand5">
                                                        <span>Apple</span>
                                                    </label>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-sm-9  content">
                                <div class="theiaStickySidebar">
                                <div class="product-row row mr-0 ">

                                   {
                                    Product.map(e => {
                                        return (
                                            <>
                                               
                                                    <div class="col-xs-6 col-sm-4 col-md-3 pa-0">
                                                            <Link to={`/product-detalis/${e.id}`}>
                                                                <div class="product">
                                                                    <div class="card text-center">
                                                                        <div class="image-box text-center">
                                                                            <img src={e.image} style={{"height":"180px", "width":"170px"}}></img>
                                                                        </div>
                                                                        <div class="card-body">
                                                                            <div class="product-name">
                                                                                <h5 class="card-title">{e.product_name}</h5>
                                                                            </div>
                                                                            <div class="prduct-price">
                                                                                <h5 class="card-text">
                                                                                    ৳{e.price} 
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    
                                            </>
                                        )
                                    })
                                }
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

export default Catagroy