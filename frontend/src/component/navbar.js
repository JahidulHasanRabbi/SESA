import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies, Cookies } from 'react-cookie';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { SearchOffOutlined, SearchOffSharp, SearchRounded } from '@mui/icons-material';





const Navbarfirst = () => {

    const [Cookies, setCookie, removeCookie] = useCookies(["user"])
    const [iscookies, setiscookies] = useState(false)

    const [Search, setSearch] = useState('')
    const [Productdetails, setProductdetails] = useState([])
    

    
    const checkCookie= () => {
        const check = Cookies.user
        if (check != null) {
          setiscookies(true)
        } 
        else {
            setiscookies(false)
        }
      }

      const handleclick = () => {
        removeCookie('user', {path: '/' })
        setiscookies(false)
        console.log(iscookies)
        checkCookie()
    }


    useEffect(() => {
        checkCookie()
    },[iscookies][handleclick]);

   
    const handlechangesearch = async(e) => {
        const searchword = e.target.value
        setSearch(searchword)
        const search = Search

        if(search.length == 0) {
            console.log(searchword)
        }
        else {
            const response = await axios.get('http://127.0.0.1:8000/api/search/', {
                params: {search}
            }).then(res => {
                setProductdetails(res.data)
                console.log(res.data)
            })
            .catch(errors => console.log(errors))
    
        }

    }




    return (
        <>
        <div class="navbar-body">
            <div class="first-navbar">
                <nav class="navbar">
                    <div class="container">
                        <Link class="navbar-brand" to="/">
                            <span class="text-upeercase shopmart">shopmart</span>
                        </Link>
                        
                        <div>
                        
                            
                        <Button variant="contained" endIcon={<SearchRounded />} href="/product/search">
                                            Search
                        </Button>
                            


                        </div>
        
                        <div class="cart">
                            <span><i class="fas fa-cart-plus"></i></span>
                            <strong class="cart-my">My Cart</strong>
                        </div>

                        {
                            !iscookies && (
                                <>

                                <div>
                                        <Button variant="contained" endIcon={<SendIcon />} href="/register">
                                            Register
                                        </Button>
                                </div>
                                <div>
                                <Button variant="contained" href="/login" onSubmit={handleclick}>
                                    Login
                                </Button>
                                    
                                </div> 
                                </>
                                
                            )
                        }

                        {
                            iscookies && (
                                <>

                                <div>
                                        <Button variant="contained" endIcon={<SendIcon />} href="/account">
                                            Account
                                        </Button>
                                </div>
                                <div>
                                <Button variant="contained"  onClick={handleclick} href="/">
                                    Logout
                                </Button>
                                    
                                </div> 
                                </>
                                
                            )
                             
                            
                        }
                        
                    

                    </div>
                </nav>
            </div>


            <div class="snd-navbar">

                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarTogglerDemo01" 
                        aria-controls="navbarTogglerDemo01" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span class=""><i class="fas fa-bars"></i></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul class="nav navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">

                                <li class="nav-item">
                                    <Link class="nav-link" id="home-f" aria-current="page" to="/">Home</Link>
                                </li>

                                <li class="nav-item dropdown">
                                    <Link class="nav-link" to="/product/catagory/woman" id="navbarDropdown" role="button" data-bs-toggle="" aria-expanded="false">
                                    woman's fashion
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li><Link to="/product/main_catagory/woman/tops" class="dropdown-item" >Tops</Link></li>
                                    <li><Link to="/product/main_catagory/woman/winter_cloth" class="dropdown-item">winter cloth</Link></li>
                                    <li><Link to="/product/main_catagory/woman/hoodies" class="dropdown-item">Hoodies</Link></li>
                                    <li><Link to="/product/main_catagory/woman/accessory" class="dropdown-item">accessories</Link></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <Link class="nav-link" to="/product/catagory/man" id="navbarDropdown" role="button" data-bs-toggle="" aria-expanded="false">
                                    man's fashion
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                    <li><Link to="/product/main-catagory/man/winter_cloth" class="dropdown-item">winter collection</Link></li>
                                    <li><Link to="/product/main-catagory/man/tshirt" class="dropdown-item">Tshirt</Link></li>
                                    <li><Link to="/product/main-catagory/man/hoodies" class="dropdown-item">man's shoes</Link></li>
                                    <li><Link to="/product/main-catagory/man/accessory" class="dropdown-item">man's shoes</Link></li>
                                    <li><Link to="/product/main-catagory/man/man_shoe" class="dropdown-item">man's shoes</Link></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                <Link class="nav-link" to="/product/catagory/mobile" id="navbarDropdown" role="button" data-bs-toggle="" aria-expanded="false">
                                    smartphones
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <li><Link to="/product/main-catagory/mobile/nokia" class="dropdown-item">nokia</Link></li>
                                    <li><Link to="/product/main-catagory/mobile/samsung"  class="dropdown-item">samsung</Link></li>
                                    <li><Link to="/product/main-catagory/mobile/apple"  class="dropdown-item">apple</Link></li>
                                    <li><Link to="/product/main-catagory/mobile/mi"  class="dropdown-item">mi</Link></li>
                                    <li><Link to="/product/main-catagory/mobile/oppo"  class="dropdown-item">oppo</Link></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                <Link class="nav-link" to="/product/catagory/electronics" id="navbarDropdown" role="button" data-bs-toggle="" aria-expanded="false">
                                    electronics & appliances
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                    <li><Link to="/product/main-catagory/electronic/home_application" class="dropdown-item">home appliances</Link></li>
                                    <li><Link to="/product/main-catagory/electronic/kitchen_applicaton" class="dropdown-item">kitchen appliances</Link></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                <Link class="nav-link" to="/product/catagory/computer" id="navbarDropdown" role="button" data-bs-toggle="" aria-expanded="false">
                                    computer & accessories
                                    </Link>
                                    <ul  class="dropdown-menu" aria-labelledby="navbarDropdown5">
                                    <li><Link to="/product/main-catagory/computer/laptop" class="dropdown-item">laptop</Link></li>
                                    <li><Link to="/product/main-catagory/computer/desktop" class="dropdown-item">dekstop</Link></li>
                                    <li><Link to="/product/main-catagory/computer/allinonepc" class="dropdown-item">all in one pc</Link></li>
                                    <li><Link to="/product/main-catagory/computer/accessory" class="dropdown-item">acessories</Link></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                <Link class="nav-link" to="/product/catagory/home" id="navbarDropdown" role="button" data-bs-toggle="" aria-expanded="false">
                                    home & beauty
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown6">
                                    <li><Link to="/product/main-catagory/home/gromming" class="dropdown-item">gromming product</Link></li>
                                    <li><Link to="/product/main-catagory/home/Trimmer" class="dropdown-item">trimmer & shaver</Link></li>
                                    <li><Link to="/product/main-catagory/home/women_watch" class="dropdown-item">women's watch</Link></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
        </>
    )
        
}

export default Navbarfirst