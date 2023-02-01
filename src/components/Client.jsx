import client_bg1 from '../assests/images/client-say/client-bg1.png'
import client_bg2 from '../assests/images/client-say/client-bg2.png'
import client_img1 from '../assests/images/client-say/client-img1.png'
import client_img2 from '../assests/images/client-say/client-img2.png'
import client_img3 from '../assests/images/client-say/client-img3.png'
import client_rating from '../assests/images/client-say/client-rating.png'

const Client = () => {
    return (
        <>
            <section className="client-say-section">
                <h1>Check what client say</h1>
                <div className="client-say-main">
                    <div className="client-say-bg">
                        <img src={client_bg1} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="client-say-box">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
                                        Lorem Ipsum dummy Lorem Ipsum is simply dummy.</p>
                                    <img className="client-img" src={client_rating} alt="" />
                                    <div className="client-name">
                                        <img src={client_img1} alt="" />
                                        <h5>James G. Calhoun <br /><span>CEO of HRC Company</span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="client-say-box">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
                                        Lorem Ipsum dummy Lorem Ipsum is simply dummy.</p>
                                    <img className="client-img" src={client_rating} alt="" />
                                    <div className="client-name">
                                        <img src={client_img2} alt="" />
                                        <h5>Shannon J <br /> <span>Manager</span></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="client-say-box">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
                                        Lorem Ipsum dummy Lorem Ipsum is simply dummy.</p>
                                    <img className="client-img" src={client_rating} alt="" />
                                    <div className="client-name">
                                        <img src={client_img3} alt="" />
                                        <h5>Bonnie Harris<br /> <span>CEO of Lorem Company</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={client_bg2} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client
