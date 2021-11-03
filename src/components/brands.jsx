import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Im1 from "../assets1/9.png"
import Im2 from "../assets/img/footer/6.png"
import Im3 from "../assets/img/footer/7.png"
import Im4 from "../assets/img/footer/5.png"
import Im5 from "../assets/img/footer/9.png"
import Im6 from "../assets/img/footer/3.png"
import Im7 from "../assets/img/footer/2.png"
import Im8 from "../assets/img/footer/4.png"


export default function Brands() {
    return (
        <div>
            <div className="main-clc d-flex justify-content-between p-4 font-weight-bold">
                <p className="ml-5 pl-2">FEATURED BRANDS</p>
            </div>
            <OwlCarousel
            className="owl-theme"
            items="7"
            autoplay={true}
            nav={true}
            dots={true}
            loop={true}
            margin={8}
            >
                <img src={Im1} alt="" />
                <img src={Im1} alt="" />
                <img src={Im1} alt="" />
                <img src={Im1} alt="" />
                <img src={Im1} alt="" />
            </OwlCarousel>

            <div className="container-fluid">
                
                <div className="row d-flex justify-content-around border">

                    <div className="col-lg-4 text-center col-md-4 col-sm-12 col-12 pt-4 pb-4 align-content-center border">

                        <h1 className="brandpara1">Be the first to know</h1>
                        <h2 className="brandpara2">Subscribe Now !</h2>
                        <h3 className="brandpara3">Become a part of the JOMO family</h3>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0 d-flex justify-content-center align-items-center border">

                        <p className=''>Get all the latest information on sales, discounts and weekly product launches. Sign up for our newsletter today.</p>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 newLetterDiv d-flex justify-content-center align-items-center border">

                        <input type="text" className='' placeholder='Your Email address'/>
                        <button type='button' className=''>Subscribe</button>

                        <div className="brandIconContainer mt-2">

                            <img src={Im2} className="footerImg1" alt="" />
                            <img src={Im3} className="footerImg1" alt="" />
                            <img src={Im4} className="footerImg1" alt="" />
                            <img src={Im5} className="footerImg2 footerImg3 ml-2" alt="" />
                            <img src={Im6} className="footerImg2 ml-3" alt="" />
                            <img src={Im7} className="footerImg2" alt="" />
                            <img src={Im8} className="footerImg2" alt="" />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
