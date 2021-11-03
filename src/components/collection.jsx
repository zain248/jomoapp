import React from 'react'
// import Im1 from "../assets/img/slider-images/col1.png"
// import Im2 from "../assets/img/slider-images/col2.png"
// import Im3 from "../assets/img/slider-images/col3.png"
// import Im4 from "../assets/img/slider-images/col4.png"
export default function Collection({mainCollectionMenF,mainCollectionWomenF,mainCollectionKidsF,mainCollectionV,mainCollectionTextV}) {
    console.log(mainCollectionTextV,"hello")
    return (
        <div>
            <div className="main-clc d-flex justify-content-between p-4 font-weight-bold">
                <p className="ml-5 pl-2">{mainCollectionTextV[0]}</p>
                <div className="click d-flex justify-content-between mr-3 pr-5 mt-2">
                <p onClick={mainCollectionMenF}>MEN</p>
                <p onClick={mainCollectionWomenF}>WOMEN</p>
                <p onClick={mainCollectionKidsF}>KIDS</p>
                </div>
            </div>
            <div className="container-fluid mainclc">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 p-0 ">
                            <img src={mainCollectionV[0]} width='100%' height='100%' alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 p-0 ">
                            <img src={mainCollectionV[2]} width='100%' height='100%' alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 p-0 h-50">
                            <img src={mainCollectionV[1]} width='100%' height='100%' alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 p-0 h-50">
                            <img src={mainCollectionV[3]} width='100%' height='100%' alt="" />
                            </div>
                        </div>
            </div>
        </div>
    )
}
