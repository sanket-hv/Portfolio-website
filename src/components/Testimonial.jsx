import client_img1 from '../assests/images/client-say/client-img1.png'
import client_img2 from '../assests/images/client-say/client-img2.png'
import client_img3 from '../assests/images/client-say/client-img3.png'
import client_rating from '../assests/images/client-say/client-rating.png'
import TestimonialSlider from '../utils/TestimonialSlider'
import Slider from "react-slick";

const Client = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: 'unslick',
            },
          ],
    };
    return (
        <>
            <section className="client-say-section">
                <h1>Check what client say</h1>
                <div className="client-say-main">
                    <div className="container">
                        {/* <div className='row'> */}
                            <Slider autoplay = {true} className='testimonial' {...settings} >
                                <TestimonialSlider name = 'James G. Calhoun' position = 'CEO of HRC Company' img1={client_img1} rating={client_rating} />
                                <TestimonialSlider name = 'Shannon J' position = 'Manager' img1={client_img2} rating={client_rating} />
                                <TestimonialSlider name = 'Bonnie Harris' position = 'CEO of Lorem Company' img1={client_img3} rating={client_rating} />
                                <TestimonialSlider name = 'James G. Calhoun' position = 'CEO of HRC Company' img1={client_img1} rating={client_rating} />
                            </Slider>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Client
