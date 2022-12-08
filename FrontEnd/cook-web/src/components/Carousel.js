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
                    <img alt='' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt='' src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;