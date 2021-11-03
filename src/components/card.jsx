import React from 'react'
import Im1 from "../assets1/1.jpg"  

export default function Card() {
    return (
        <div>
            <div class="card" style={{width: "11 rem",backgroundColor: '#F9F9F9'}}>
                <img class="card-img-top" src={Im1} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Gabrel Kc</h5>
                    <p class="card-text">HUSH PUPPIES - Men</p>
                    <h6>PKR 12,592</h6>
                </div>
            </div>
        </div>
    )
}
