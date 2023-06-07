import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/banner-img/front-view-trainer-talking-players.jpg'
import slider2 from '../../../assets/banner-img/medium-shot-football-trainer-helping-kids.jpg'
import slider3 from '../../../assets/banner-img/medium-shot-smiley-kids-posing-together.jpg'
import slider4 from '../../../assets/banner-img/sports-teacher-with-her-students.jpg'
import slider5 from '../../../assets/banner-img/young-basketball-player-shoot.jpg'

const Banner = () => {
    return (
        <div>
              <Carousel>
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider3} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider4} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider5} />
                    <p className="legend">Legend 1</p>
                </div>
              
            </Carousel>
        </div>
    );
};

export default Banner;