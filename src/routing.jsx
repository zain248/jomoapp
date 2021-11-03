import React,{useState} from "react"
import Nav from "./components/nav"
import Slider from "./components/slider"
import "./style.css"
import Collection from "./components/collection"
import Scroll from "./components/scroll"
import Brands from "./components/brands"
import {Brand} from "./data"
import Trending from "./components/trending"
export default function Routing(){

        //SliderImages
    

    //mainCollectionMenImages
    let [mainCollectionV,setmainCollectionV]=useState(Brand[0].Ace[0].mainCollectionImages)
    let [mainCollectionTextV,setmainCollectionTextV]=useState([])
    let mainCollectionMenF=()=>{
        let mainCollectionMenVtemp=Brand[0].Ace[0].mainCollectionImages
        let mainCollectionTextVTemp=Brand[0].Ace[0].mainCollectionText
        console.log(mainCollectionMenVtemp,"txt");
        setmainCollectionTextV(mainCollectionTextVTemp)
        setmainCollectionV(mainCollectionMenVtemp)
    }
    //mainCollectionWomenImages
    let mainCollectionWomenF=()=>{
        let mainCollectionWomenVtemp=Brand[0].Ace[1].mainCollectionImages
        setmainCollectionV(mainCollectionWomenVtemp)
        let mainCollectionTextVTemp=Brand[0].Ace[1].mainCollectionText
        setmainCollectionTextV(mainCollectionTextVTemp)
    }
    //mainCollectionKidsImages
    let mainCollectionKidsF=()=>{
        let mainCollectionKidsVtemp=Brand[0].Ace[2].mainCollectionImages
        setmainCollectionV(mainCollectionKidsVtemp)
        let mainCollectionTextVTemp=Brand[0].Ace[2].mainCollectionText
        setmainCollectionTextV(mainCollectionTextVTemp)
    }
    
    
    
         
    
    console.log(Brand,"brand");

    return(
        <div>
        <Nav/>
        <Slider/>
        <Collection mainCollectionMenF={mainCollectionMenF} mainCollectionV={mainCollectionV} mainCollectionWomenF={mainCollectionWomenF} mainCollectionKidsF={mainCollectionKidsF} mainCollectionTextV={mainCollectionTextV}/>
        <Scroll/>
        <Trending/>
        <Brands/>
        
        </div>
        )
    }