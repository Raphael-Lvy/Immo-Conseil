import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link as AnimatedLink, animateScroll as scroll } from "react-scroll";
import hero1 from '../../Assets/hero1.jpg';
import hero2 from '../../Assets/hero2.jpg';
import hero3 from '../../Assets/hero3.jpg';
import hero4 from '../../Assets/hero4.jpg';
import './HomeHero.css';

const componentName = () => {


    const carouselImg = [
        {
            src: hero1,
            id: "hero1"
        },
        {
            src: hero2,
            id: "hero2"
        },
        {
            src: hero3,
            id: "hero3"
        },
        {
            src: hero4,
            id: "hero4"
        },
    ];

    return (

        <Carousel >
            {carouselImg.map((photo) => {
                return (

                    <Carousel.Item key={photo.id} interval={3000} className='homeCarousel' >

                        <img
                            className='heroImage center'
                            src={photo.src}
                            alt="First slide"

                        />
                        <Carousel.Caption className='heroText'> <h3>Immo Conseil <span class='black'>vous accompagne dans votre </span> <span className='green' >projet immobilier</span></h3></Carousel.Caption>
                        <Carousel.Caption> <AnimatedLink activeClass="active"
                            to="presentation"
                            smooth={true}
                            offset={-70}
                            duration={600}> <i class="fas fa-arrow-circle-down homeArrowDown"></i> </AnimatedLink></Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>

    );

};

export default componentName;