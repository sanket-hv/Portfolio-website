import React from 'react'
import articles_img1 from '../assests/images/articles&blog/articles-img1.png'
import articles_img2 from '../assests/images/articles&blog/articles-img2.png'
import articles_img3 from '../assests/images/articles&blog/articles-img3.png'
import readmore_img from '../assests/images/articles&blog/readmore-img.png'

const Articles_blog = () => {
  return (
    <>
      <section className="articles-blog-section">
        <div className="container">
            <h1>Read Our Every Single Articles & Blog</h1>
            <div className="row">
                <div className="col-12 col-lg-4 col-md-12">
                    <div className="articles-blog-box">
                        <img src={articles_img1} alt=""/>
                        <div className="articles-blog-contain">
                            <div className="articles-blog-date">
                                <h6>Web Design</h6>
                                <p>25 NOV 2021</p>
                            </div>
                            <h5>inclusive Design And Accesibility Live Stream Heydon</h5>
                            <div className="articles-blog-readmore">
                                <a className="readmore" href="#">Read More</a>
                                <a className="readmore-icon" href="#">
                                    <img src={readmore_img} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                    <div className="articles-blog-box">
                        <img src={articles_img2}alt=""/>
                        <div className="articles-blog-contain">
                            <div className="articles-blog-date">
                                <h6>Web Design</h6>
                                <p>25 NOV 2021</p>
                            </div>
                            <h5>inclusive Design And Accesibility Live Stream Heydon</h5>
                            <div className="articles-blog-readmore">
                                <a className="readmore" href="#">Read More</a>
                                <a className="readmore-icon" href="#">
                                    <img src={readmore_img} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                    <div className="articles-blog-box">
                        <img src={articles_img3} alt=""/>
                        <div className="articles-blog-contain">
                            <div className="articles-blog-date">
                                <h6>Web Design</h6>
                                <p>25 NOV 2021</p>
                            </div>
                            <h5>inclusive Design And Accesibility Live Stream Heydon</h5>
                            <div className="articles-blog-readmore">
                                <a className="readmore" href="#">Read More</a>
                                <a className="readmore-icon" href="#">
                                    <img src={readmore_img} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Articles_blog
