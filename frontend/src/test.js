import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";

const Test = () => {

    const [product, setproduct] = useState([])
    
  const onclick = async () => 
  {
      await axios.get('http://127.0.0.1:8000/api/product/').then(res => {
          console.log(res.data)
          setproduct(res.data)
          console.log('Success')
      }).catch (error=> {
          console.log(error.data)
      })
  }


  return (
    <>
        
        <Button type="submit" onClick={onclick}>
            click me
        </Button>

        {
            product.filter(e => e.main_catagory == 'laptop').slice(0,3).map(e => {

            return (
                
                <div>                        
                    <h1>{e.main_catagory}</h1>
                </div>
            )})}
        
                
        
    </>
  )
}

export default Test