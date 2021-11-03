import React,{useState} from 'react'
import Brands from "../BrandApi"

export default function Card2() {

    let [chappal,setchappal]=useState(true)
    let [sandle,setsandle]=useState(true)
    let [sport,setsport]=useState(true)
    let [women,setwomen]=useState(true)
    let [price1,setprice1]=useState(true)


    return (
        <div className="d-flex">


             <div className="filter">

                 <h6 className="mb-4">FILTERS</h6>

                <h2 className="pb-3 pt-2"style={{borderBottom:"1px solid lightgrey",fontSize:".8rem" }} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                CATEGORIES
                </h2>
                <div class="collapse" id="collapseExample">
                <div class=" d-flex ">
                    <button className="btn" style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">FOOTWEAR</p>
                </div>
                </div>
                <h2 className="pb-3 pt-2"style={{borderBottom:"1px solid lightgrey",fontSize:".8rem" }} type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                SUB-CATEGORIES
                </h2>
                <div class="collapse" id="collapseExample1">
                <div class=" d-flex ">
                    <button className="btn" onClick={()=>{setsandle(false);setsport(false);setwomen(false);setprice1(false)}} style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">CHAPPALS</p>
                </div>
                <div class=" d-flex ">
                    <button className="btn" onClick={()=>{setchappal(false);setsport(false);setwomen(false);setprice1(false)}} style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">SANDALS</p>
                </div>
                <div class=" d-flex ">
                    <button className="btn" onClick={()=>{setsandle(false);setchappal(false);setwomen(false);setprice1(false)}} style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">SPORTS</p>
                </div>
                </div>
                <h2 className="pb-3 pt-2"style={{borderBottom:"1px solid lightgrey",fontSize:".8rem" }} type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                PRODUCT TYPE
                </h2>
                <div class="collapse" id="collapseExample2">
                <div class=" d-flex ">
                    <button className="btn" style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">footwear</p>
                </div>
                </div>
                <h2 className="pb-3 pt-2"style={{borderBottom:"1px solid lightgrey",fontSize:".8rem" }} type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                BRANDS
                </h2>
                <div class="collapse" id="collapseExample3">
                <div class=" d-flex ">
                    <button className="btn" style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">FLY FOOT</p>
                </div>
                </div>
                <h2 className="pb-3 pt-2"style={{borderBottom:"1px solid lightgrey",fontSize:".8rem" }} type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                PRICE
                </h2>
                <div class="collapse" id="collapseExample4">
                <div class=" d-flex ">
                    <button className="btn" onClick={()=>{setprice1(false)}} style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">PKR 0 - PKR 5000</p>
                </div>
                <div class=" d-flex ">
                    <button className="btn" onClick={()=>{setsandle(false);setsport(false);setwomen(false);setchappal(false)}} style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">PKR 5000 - PKR 10000</p>
                </div>
                </div>
                <h2 className="pb-3 pt-2"style={{borderBottom:"1px solid lightgrey",fontSize:".8rem" }} type="button" data-toggle="collapse" data-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                COLOUR
                </h2>
                <div class="collapse" id="collapseExample5">
                <div class=" d-flex ">
                    <button className="btn" style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">footwear</p>
                </div>
                </div>
                <h2 className="pb-3 pt-2"style={{borderBottom:"1px solid lightgrey",fontSize:".8rem" }} type="button" data-toggle="collapse" data-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                SIZE
                </h2>
                <div class="collapse" id="collapseExample6">
                <div class=" d-flex ">
                    <button className="btn" style={{width:"4%",height:"4vh"}}></button>
                    <p className="ml-4">footwear</p>
                </div>
                </div>
        </div>



            <div className="cardsdiv d-flex flex-wrap">

        
                 <div className="d-flex flex-wrap">
            <div class="card border-0" style={{width: "14.7rem",height:"60vh"}}>
                    <img class="card-img-top" style={{height:"40vh",width:"100%"}} src={Brands[2].Men[0].footWear[0].footWearChappalCollection[0].Images[0]} alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">FLIP FLOPS</p>
                    <p className="card-text" style={{fontSize:".8rem",fontWeight:"550",marginTop:"-.5rem",marginBottom:".5rem"}}>FLY FOOT - Men</p>
                    <h6>PKR 12,592</h6>
                </div>
            </div>
            <div class="card border-0" style={{width: "14.7rem",height:"60vh"}}>
                    <img class="card-img-top" style={{height:"40vh",width:"100%"}} src={Brands[2].Men[0].footWear[0].footWearChappalCollection[0].Images[1]} alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">FLIP FLOPS</p>
                    <p className="card-text" style={{fontSize:".8rem",fontWeight:"550",marginTop:"-.5rem",marginBottom:".5rem"}}>FLY FOOT - Men</p>
                    <h6>PKR 12,592</h6>
                </div>
            </div>
            <div class="card border-0" style={{width: "14.7rem",height:"60vh"}}>
                    <img class="card-img-top" style={{height:"40vh",width:"100%"}} src={Brands[2].Men[0].footWear[0].footWearChappalCollection[0].Images[2]} alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">FLIP FLOPS</p>
                    <p className="card-text" style={{fontSize:".8rem",fontWeight:"550",marginTop:"-.5rem",marginBottom:".5rem"}}>FLY FOOT - Men</p>
                    <h6>PKR 12,592</h6>
                </div>
            </div>
            <div class="card border-0" style={{width: "14.7rem",height:"60vh"}}>
                    <img class="card-img-top" style={{height:"40vh",width:"100%"}} src={Brands[2].Men[0].footWear[0].footWearChappalCollection[0].Images[3]} alt="Card image cap"/>
                <div class="card-body">
                    <p class="card-text">FLIP FLOPS</p>
                    <p className="card-text" style={{fontSize:".8rem",fontWeight:"550",marginTop:"-.5rem",marginBottom:".5rem"}}>FLY FOOT - Men</p>
                    <h6>PKR 12,592</h6>
                </div>
            </div>
            
            </div> 



        
            



            </div>


        </div>
    )
}
