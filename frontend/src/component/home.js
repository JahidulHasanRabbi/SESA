import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const Home = () => {

  
  const [product, setproduct] = useState([])

  const response = async () => 
  {
      await axios.get('http://127.0.0.1:8000/api/product/').then(res => {
          console.log(res.data)
          setproduct(res.data)
          console.log('Success')
      }).catch (error=> {
          console.log(error.data)
      })
  }

  useEffect(() => {
      response();
    }, []);

    return (
        <>
        <div class="mainpage">

          <div class="carousel">

            <div id="carouselExampleIndicators" 
              class="carousel slide carousel-fade"  
              data-bs-ride="carousel">

              <div class="carousel-indicators">

                <button class="active btnin" 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="0" 
                  aria-current="true" 
                  aria-label="Slide 1">
                  
                </button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="1" 
                  aria-label="Slide 2">

                </button>

                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="2" 
                  aria-label="Slide 3">
                  
                </button>

                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="3" 
                  aria-label="Slide 4">

                </button>

                <button type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="4" 
                  aria-label="Slide 5">

                </button>

                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="5" 
                  aria-label="Slide 6">

                </button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="6" 
                  aria-label="Slide 7">

                </button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="7" 
                  aria-label="Slide 8">

                </button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="8" 
                  aria-label="Slide 9">

                </button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="9" 
                  aria-label="Slide 10">

                </button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="10" 
                  aria-label="Slide 11">

                </button>
                <button 
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to="11" 
                  aria-label="Slide 12">

                </button>
              </div>
              
              <div class="carousel-inner">
                <div class="carousel-item active" data-interval="2000">
                  <img 
                    src="./image/bkash.jpg" 
                    class="d-block w-100" 
                    alt="..." />
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/amazfit-smartwatch-post-web.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/avaiable-2-sq_1200_400.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/c25s-kv-web-post_1.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/computer-accessories_cmp_post-web_v2.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/create-style-with-branded-watch-kv-post-web_1_.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/flash-sale-a4tech-headphones-kv-web.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/grooming-essentials-kv-web.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/lenovo-accessories_post-web.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./image/next-day-delivery-_post-web_1.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img 
                    src="./Image/samsung_mega_sale_regular-fb_m12_big-banner.jpg" 
                    class="d-block w-100" 
                    alt="..."/>
                </div>
              </div>

          <button 
            class="carousel-control-prev" 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide="prev">
              <span 
                class="carousel-control-prev-icon" 
                aria-hidden="true"
              ></span>
              <span 
                class="visually-hidden">
                  Previous
                </span>
          </button>

          <button 
            class="carousel-control-next" 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="banner">
        <Link
          class="banner-imag" 
          to={`/product/catagory/mobile`}>
            <img 
              src="./image/SmartPhone.jpg" 
              alt="" 
              class="img-fluid"/>
        </Link>
      </div>

      <div class="container">

        <div class="product_catagory">
          <div class="block-title">
            <strong class="text-uppercase">
              mobile
            </strong>
          </div>
          <div class="row row-cols-6">
            {
              product.filter(e=> e.main_catagory == 'mobile').slice(0, 6).map(e => {

                return (
                  <div class="col">
                          <Link to={`/product-detalis/${e.id}`}>
                            <div class="card">
                                <div class="image text-center">
                                  <img src={e.image} alt={e.product_name} ></img>
                                </div>
                              <div class="card-body">
                                <div class="">
                                  <h6 class="card-title">{e.product_name}</h6>
                                </div>
                                <div class="">
                                    <strong><h5 class="card-text">৳{e.price}</h5></strong>
                                </div>
                              </div>
                            </div>
                          </Link> 
                        </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div class="banner">
        <Link class="banner-imag" to="/product/catagory/electronic">
          <img src="./image/ena.jpg" alt="" class="img-fluid"></img>
        </Link>
      </div>

      <div class="container">

        <div class="product_catagory">
        <div class="block-title">
            <strong class="text-uppercase">
              electronics & application
            </strong>
          </div>
          <div class="row row-cols-6">
          {
              product.filter(e=> e.main_catagory == 'electronic').slice(0, 6).map(e => {

                return (
                  <div class="col">
                          <Link to={`/product-detalis/${e.id}`}>
                            <div class="card">
                                <div class="image text-center">
                                  <img src={e.image} alt={e.product_name} ></img>
                                </div>
                              <div class="card-body">
                                <div class="">
                                  <h6 class="card-title">{e.product_name}</h6>
                                </div>
                                <div class="">
                                    <strong><h5 class="card-text">৳{e.price}</h5></strong>
                                </div>
                              </div>
                            </div>
                          </Link> 
                        </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
      <div class="banner">
      <Link class="banner-imag" to="/product/catagory/computer">
          <img src="./image/computer.jpg" alt="" class="img-fluid">
          </img>
        </Link>
      </div>

      <div class="container">

        <div class="product_catagory">
        <div class="block-title">
            <strong class="text-uppercase">
              computer & accessory
            </strong>
          </div>
          <div class="row row-cols-6">
          {
              product.filter(e=> e.main_catagory == 'computer').slice(0, 6).map(e => {

                return (
                  <div class="col">
                          <Link to={`/product-detalis/${e.id}`}>
                            <div class="card">
                                <div class="image text-center">
                                  <img src={e.image} alt={e.product_name} ></img>
                                </div>
                              <div class="card-body">
                                <div class="">
                                  <h6 class="card-title">{e.product_name}</h6>
                                </div>
                                <div class="">
                                    <strong><h5 class="card-text">৳{e.price}</h5></strong>
                                </div>
                              </div>
                            </div>
                          </Link> 
                        </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
      <div class="banner">
      <Link class="banner-imag" to="/product/catagory/home">
          <img src="./image/LIFESTYLE.jpg" alt="" class="img-fluid">
          </img>
        </Link>
      </div>

      <div class="container">

        <div class="product_catagory">
        <div class="block-title">
            <strong class="text-uppercase">
              home and beauty
            </strong>
          </div>
          <div class="row row-cols-6">
          {
              product.filter(e=> e.main_catagory == 'home').slice(0, 6).map(e => {

                return (
                  <div class="col">
                          <Link to={`/product-detalis/${e.id}`}>
                            <div class="card">
                                <div class="image text-center">
                                  <img src={e.image} alt={e.product_name} ></img>
                                </div>
                              <div class="card-body">
                                <div class="">
                                  <h6 class="card-title">{e.product_name}</h6>
                                </div>
                                <div class="">
                                    <strong><h5 class="card-text">৳{e.price}</h5></strong>
                                </div>
                              </div>
                            </div>
                          </Link> 
                        </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
      <div class="banner">
      <Link class="banner-imag" to="/product/main-catagory/computer/gaming">
          <img src="./image/Gaming-updated.jpg" alt="" class="img-fluid">
          </img>
        </Link>
      </div>

      <div class="container">

        <div class="product_catagory">
        <div class="block-title">
            <strong class="text-uppercase">
              gaming consol & accessories
            </strong>
          </div>
          <div class="row row-cols-6">
          {
              product.filter(e=> e.main_catagory == 'computer' && e.catagory == 'gaming').slice(0, 6).map(e => {

                return (
                  <div class="col">
                          <Link to={`/product-detalis/${e.id}`}>
                            <div class="card">
                                <div class="image text-center">
                                  <img src={e.image} alt={e.product_name} ></img>
                                </div>
                              <div class="card-body">
                                <div class="">
                                  <h6 class="card-title">{e.product_name}</h6>
                                </div>
                                <div class="">
                                    <strong><h5 class="card-text">৳{e.price}</h5></strong>
                                </div>
                              </div>
                            </div>
                          </Link> 
                        </div>
                )
              })
            }
          </div>
        </div>
      </div>


    </div>
      </>
    )
}

export default Home;