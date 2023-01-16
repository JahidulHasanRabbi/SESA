import React from "react";

const Footer = () => {
    return (
        <>
        <div>
                <section class="text-custom">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase">
                                    About us
                                </h6>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="example.com" class="text-reset">Privacy Policy</a>
                                    </li>
                    
                                    <li> 
                                        <a href="example.com" class="text-reset">Cookie Policy</a>
                                    </li>
                    
                                    <li>
                                        <a href="example.com" class="text-reset">Help</a>
                                    </li><li>
                                        <a href="example.com" class="text-reset">Privacy Policy</a>
                                    </li>
                    
                                    <li>
                                        <a href="example.com" class="text-reset">Cookie Policy</a>
                                    </li>
                    
                                    <li>
                                        <a href="example.com" class="text-reset">Help</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                Contact
                                </h6>
                                <p><a href="example.com" class="text-reset">Contact Us</a></p>
                    
                            </div>
                            
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase">
                                Shopmart
                                </h6>
                                <ul class="list-unstyled">
                                    <li>
                                        <p><i class="fas fa-map-marker-alt"></i><span style={{'margin-left': '20px'}}>Baridara, Dhaka</span></p>
                                    </li>
                                    <li>
                                        <p><i class="fas fa-phone me-3"></i>+ 880 1712247851</p>
                                    </li>
                                    <li>
                                        <p><i class="fas fa-print me-3"></i>+ 880 1825458512</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto  mb-4">
                                <h6 class="text-uppercase">
                                    Download our app
                                </h6>
                                <a href="example.com" style={{'display': 'inline-block', 'overflow': 'hidden', 'border-radius': '10px', 'width': '200px', 'height': '70px'}}>
                                    <img src="/Shopmart/Image/google-play-badge.png" alt="Download in Play Store" style={{'border-radius': '10px', 'width': '200px' ,'height':'70px'}} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
        

                <div class="social-group">
                    <a href="example.com" class="social fb">
                        <span class="fab fa-facebook "></span>
                    </a>

                    <a href="example.com" class="social youtube">
                        <i class="fab fa-youtube"></i>
                    </a>

                    <a href="example.com" class="social instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>

                <div class="rights text-center">
                    <p>All rights reserved</p>
                </div>
            </div>
        </>
    )
    
}

export default Footer