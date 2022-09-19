import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel centerMode='true' width="50em">
                <div>
                    <img src="https://robohash.org/1?200x200" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://robohash.org/2?200x200" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://robohash.org/3?200x200" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;