import React from 'react'
import ImgHeader2 from "../assets/sliderImgs/b1.png"
import Img2Header2 from "../assets/sliderImgs/b2.png"
// import Im1 from "../assets/img/slider-images/1.png"
// import Im2 from "../assets/img/slider-images/2.jpg"
// import Im3 from "../assets/img/slider-images/3.png"
// import Im4 from "../assets/img/slider-images/4.jpg"
// import Im5 from "../assets/img/slider-images/5.png"
// import Im6 from "../assets/img/slider-images/6.jpg"
// import Im7 from "../assets/img/slider-images/7.jpg"
// import Im8 from "../assets/img/slider-images/8.jpg"
// import Im9 from "../assets/img/slider-images/look.png"
// import Im10 from "../assets/img/slider-images/edit.png"
import {Brand} from "../data"

export default function Slider() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner rel">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Brand[0].slider[0]} alt="First slide"/>
      <div className="btn-div1">
      <button className="btn btnn">MEN</button>
      <button className="btn btnn">WOMEN</button>
      <button className="btn btnn">BOYS</button>
      <button className="btn btnn">GIRLS</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Brand[0].slider[1]} alt="Second slide"/>
      <div className="btn-div1">
      <button className="btn btnn">MEN</button>
      <button className="btn btnn">WOMEN</button>
      <button className="btn btnn">BOYS</button>
      <button className="btn btnn">GIRLS</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Brand[0].slider[2]} alt="Third slide"/>
      <div className="btn-div1">
      <button className="btn btnn">MEN</button>
      <button className="btn btnn">WOMEN</button>
      <button className="btn btnn">BOYS</button>
      <button className="btn btnn">GIRLS</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Brand[0].slider[3]} alt="Third slide"/>
      <div className="btn-div1">
      <button className="btn btnn">MEN</button>
      <button className="btn btnn">WOMEN</button>
      <button className="btn btnn">BOYS</button>
      <button className="btn btnn">GIRLS</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Brand[0].slider[4]} alt="Third slide"/>
      <div className="btn-div1">
      <button className="btn btnn">MEN</button>
      <button className="btn btnn">WOMEN</button>
      <button className="btn btnn">BOYS</button>
      <button className="btn btnn">GIRLS</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Brand[0].slider[5]} alt="Third slide"/>
      <div className="btn-div1">
      <button className="btn btnn">MEN</button>
      <button className="btn btnn">WOMEN</button>
      <button className="btn btnn">BOYS</button>
      <button className="btn btnn">GIRLS</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        <div className="container-fluid m-0 p-0">
          <div className="row do mt-4 m-0 p-0">
            <div className="look col-sm-12 col-md-6 m-0 p-0">
              <img src={ImgHeader2} className="m-0 p-0" alt="" />
            </div>
            <div className="edit col-sm-12 col-md-6 m-0 p-0">
              <img src={Img2Header2} className="m-0 p-0" alt="" />
            </div>
          </div>
        </div>

        </div>
    )
}
