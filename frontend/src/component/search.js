import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";


const Search = () => {

    const [Search, setSearch] = useState('')
    const [Product, setProductdetails] = useState([])
    const [empty, setisempty] = useState(false)


    const handlechangesearch = async(e) => {
        const searchword = e.target.value
        setSearch(searchword)
        const search = Search

        
            const response = await axios.get('http://127.0.0.1:8000/api/search/', {
                params: {search}
            }).then(res => {
                setProductdetails(res.data)
                console.log(res.data)
                setisempty(true)
            })
            .catch(errors => console.log(errors))

    }
    

    useEffect(() => {
        handlechangesearch()
        
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div class="main-page">
                <div class="container">
                    <div class="row">
                    <div class="box_search">
                    <Box
                        sx={{
                            width: "100%",
                            height: 50,
                            backgroundColor: 'primary.white'

                        }}
                    >

                    <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    onChange={handlechangesearch}
                    />
                    </Box>

                    </div>
                        {
                            !empty && (
                                <>
                                <div class="text-center" style={{"fontStyle":"bold", "marginTop":"10px"}}>
                                    <h2>Search For Something</h2>

                                </div>
                                </>
                            )
                        }

                            <div class="col  content">
                                <div class="theiaStickySidebar">
                                <div class="product-row row ">

                                   
                                   { Product && Product.map(e => {
                                        return (
                                            <>
                                               
                                                    <div class="col align-items-left col_search">
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
           
            
        </>
    )
}

export default Search