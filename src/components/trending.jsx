import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Card from './card'
import Im1 from "../assets/img/TrendingProducts/next.svg"
import Im2 from "../assets/img/TrendingProducts/pre.svg"

export default function Trending() {

    // let mountedStyle = {
    //     animation: "inAnimation 300ms ease-in"
    // };

    return (
        <div className="trending" style={{backgroundColor: '#F9F9F9'}}>
            <div className="main-clc container-fluid d-flex justify-content-between p-4 font-weight-bold">
                <p className="ml-5 pl-2">TRENDING PRODUCTS</p>
                <div className="click click1 d-flex justify-content-between mr-3 pr-5 mt-2">
                <p>FOOTWEAR</p>
                <p>APPAREL</p>
                <p>BAGS & WALLETS</p>
                <p>ACCESSORIES</p>
                </div>
            </div>
            <OwlCarousel
            className="owl-theme"
            items="5"
            // autoplay={true}
            nav
            dots
            loop
            // margin={12}
            // navText= {[Im1,Im2]}
            >
                <div>
                <Card/>

                </div>
                <div>
                <Card/>

                </div>
                  <div>
                <Card/>

                </div>
                <Card/>
                <Card/>
                <Card/>
                

            </OwlCarousel>
        </div>

    )
}
