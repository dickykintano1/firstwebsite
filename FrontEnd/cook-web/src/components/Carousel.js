import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
                infiniteLoop='true' 
                autoPlay='true' 
                showThumbs='false'
                showStatus='false'
                showArrows='false'
                // showThumbs='false'
            >
                <div>
                    <img alt='' src="https://image.shutterstock.com/image-photo/brown-egg-among-white-eggs-600w-1066620410.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='' src="https://image.shutterstock.com/image-photo/five-different-size-plate-on-600w-2016701552.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt='' src="https://image.shutterstock.com/image-photo/coconut-two-halves-nutshells-on-600w-1009113316.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;