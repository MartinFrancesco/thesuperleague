import "./Hero.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
    return (
        <div className="hero">
            <Carousel
                showThumbs={false}
            >
                <div>
                    <img src="https://psgtalk.com/wp-content/uploads/2021/04/Super-League.jpg" />
                </div>
                <div>
                    <img src="https://assets.brandinside.asia/uploads/2021/04/super-league.jpg" />
                </div>
                <div>
                    <img src="https://www.sportbuzzbusiness.fr/wp-content/uploads/2021/04/the-super-league-nouvelle-comp%C3%A9tition-football-20-clubs-europe.jpg" />
                </div>
            </Carousel>
        </div>
    )
}
export default Hero;