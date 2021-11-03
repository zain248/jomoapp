import React from 'react'
import { Parallax } from 'react-parallax';
import Im1 from "../assets1/img/slider-images/scrol.png"
export default function Scroll() {
    return (
        <div>
            <Parallax bgImage={Im1} strength={-100} bgClassName='imageSize'>
                <div className="scrol"></div>
            </Parallax>
        </div>
    )
}
