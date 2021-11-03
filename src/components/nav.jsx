import React from 'react'
import {Link} from "react-router-dom"
import Im1 from "../assets1/img/1.png"
import Im2 from "../assets1/img/2.png"
import Im3 from "../assets1/img/3.png"
import Im4 from "../assets1/img/4.png"


export default function Nav() {

    return (

        <div className="sectionNav d-flex flex-column justify-content-center align-items-center">
            
            <div className="ovr">
                <div className="RowsectionNav p-1">
                    <p className="p-0 m-0">FREE DELIVERY NATIONWIDE I SAME OR NEXT DAY SHIPPING I TRY BEFORE YOU BUY I 100% PRODUCT AUTHENTICITY GURANTEED</p>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light w-100 p-0 m-0">
                <a class="navbar-brand logo" href="#">jomo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ul">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        New Arrivals
                        </a>
                        <div class="dropdown-menu menuu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">
                        <img src={Im1} className="mr-4" alt="" />
                        FOOTWEAR
                        </a>
                        <a class="dropdown-item" href="#">
                        <img src={Im2} className="mr-4" alt="" />
                        APPAREL</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im3} className="mr-4" alt="" />
                        ACCESSORIES</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im4} className="mr-4" alt="" />
                        BAGS AND WALLETS</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Men
                        </a>
                        <div class="dropdown-menu menu1" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">
                        <img src={Im1} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        FOOTWEAR
                        <img src={Im1} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        FOOTWEAR
                        {/* </a> */}
                        {/* <a class="dropdown-item" href="#"> */}
                        <img src={Im2} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        APPAREL</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im3} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        ACCESSORIES</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im4} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        BAGS AND WALLETS</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Women
                        </a>
                        <div class="dropdown-menu menu1 menu2" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">
                        <img src={Im1} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        FOOTWEAR
                        </a>
                        <a class="dropdown-item" href="#">
                        <img src={Im2} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        APPAREL</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im3} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        ACCESSORIES</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im4} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        BAGS AND WALLETS</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Girls
                        </a>
                        <div class="dropdown-menu menu1 menu3" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">
                        <img src={Im1} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        FOOTWEAR
                        </a>
                        <a class="dropdown-item" href="#">
                        <img src={Im2} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        APPAREL</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im3} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        ACCESSORIES</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im4} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        BAGS AND WALLETS</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Boys
                        </a>
                        <div class="dropdown-menu menu1 menu4" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">
                        <img src={Im1} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        FOOTWEAR
                        </a>
                        <a class="dropdown-item" href="#">
                        <img src={Im2} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        APPAREL</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im3} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        ACCESSORIES</a>
                        <a class="dropdown-item" href="#">
                        <img src={Im4} className="mr-5 ml-5 pl-5 mt-3 mb-3" alt="" />
                        BAGS AND WALLETS</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Brands
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="ace">Ace</Link>
                        <Link to="fly" className="dropdown-item">Fly Foot</Link>
                        <a class="dropdown-item" href="#">Adidas</a>
                        </div>
                    </li>  
                    </ul>
                </div>
                <div className="icons d-flex justify-content-around">
                    <i class="fas fa-search"></i>
                    <i class="far fa-user"></i>
                    <i class="fas fa-shopping-bag"></i>
                    <i class="fas fa-phone-alt"></i>
                </div>
                </nav>
            </div>
    )
}
