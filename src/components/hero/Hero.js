
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Hero.css"
import  { Breakpoint } from 'react-socks';

import trio from '../../asset/img/trio.jpeg';
import guardiani from '../../asset/img/guardiani.jpeg';
import nott from '../../asset/img/nott.jpeg';
import biccari from '../../asset/img/biccari.jpeg';

const Hero = () => {

    return (
        <>
            <Breakpoint small down>
                <div className="hero">
                        <div className="square-gradient square-gradient-purple">
                            <h1><span>THE</span><span>SUPER LEAGUE</span></h1>
                        </div>
                        <Carousel
                            autoPlay={true}
                            showIndicators={false}
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}
                            infiniteLoop={true}
                            interval={4000}
                        >
                            <div>
                                <img src={trio} alt="logo"/>
                            </div>
                            <div>
                                <img src={guardiani} alt="logo"/>
                            </div>
                            <div>
                                <img src={nott} alt="logo"/>
                            </div>
                            <div>
                                <img src={biccari} alt="logo"/>
                            </div>
                        </Carousel>
                </div>
            </Breakpoint>
        </>
    )
}
export default Hero;