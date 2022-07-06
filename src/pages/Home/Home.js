import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Slider from "react-slick";

import anime from "animejs/lib/anime.es.js";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  banner_img,
  about_img,
  services1,
  services5,
  services4,
  services3,
  services2,
  services6,
  testimonails_img,
} from "../../constant";
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // services data
  const services = [
    {
      id: 1,
      name: "Consulting and advisory services",
      des: "After 30+ years of building our successful advisory practice, we have the tools and know-how to see the big picture and develop and implement a solution to meet your goals. ",
      img: services1,
    },
    {
      id: 2,
      name: "Assignments for the Benefit of Creditors and Liquidations ",
      des: "Sherwood knows what to do and how to monetize your asset fully. We are the “Gold Standard for Assignments for the Benefit of Creditors (ABCs) and Liquidation Services",
      img: services2,
    },
    {
      id: 3,
      name: "Intellectual Property",
      des: "Our rich database and deep relationships are critical to monetizing IP and your success. We help owners, creators, and holders of IP through Sales + Licensing + Strategy + Purchase or Loans against your IP. Your Success, Is Our Success.",
      img: services3,
    },
    {
      id: 4,
      name: "Financial Management",
      des: "The Sherwood team is well versed in all aspects of Financial Management. “We know the industry, and the industry knows Sherwood.” GET SHERWOOD! Get it done right the first time.",
      img: services4,
    },
    {
      id: 5,
      name: "Sales + Licensing + Strategy + Purchase & Loans against IP",
      des: "We focus on sales, licensing, strategy, and lending against your patents and have the ability to lend or purchase your patents when appropriate. Our focus is strictly for our clients to have a successful outcome.",
      img: services5,
    },
    {
      id: 6,
      name: "IP Purchase or lending",
      des: "Loans or purchase against your patents can be tricky. We have solutions. When you are thinking of selling or borrowing against your patents, we may be able to assist.",
      img: services6,
    },
  ];
  // services data
  useEffect(() => {
    var textWrapper = document.querySelector(".ml2");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".ml2",
        opacity: 0,
        duration: 600,
        easing: "easeOutExpo",
        delay: 500,
      });

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml15 .word",
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i,
      })
      .add({
        targets: ".ml15",
        opacity: 0,
        duration: 900,
        easing: "easeOutExpo",
        delay: 800,
      });
  }, []);

  return (
    <>
      <Header />
      {/* // <!-- Banner Sec Start Here --> */}
      <section className="banner_sec">
        <div className="container-fluid p-0">
          <div className="banner_image wow animate__animated animate__zoomIn animate__delay-2s">
            <figure>
              <img src={banner_img} className="img-fluid" />
            </figure>
          </div>
        </div>
        <div className="banner_content">
          <div className="container">
            <h2 className="title wow animate__animated animate__fadeInDown animate__delay-2s">
              GET SHERWOOD
            </h2>
            <h5 className="wow animate__animated animate__fadeInDown animate__delay-3s">
              The Gold Standard | Serving Clients Since 1992
            </h5>
            <p>It all starts when tough decisions need to be made </p>
            <div className="button-group wow animate__animated animate__fadeInDown animate__delay-5s">
              <a href="#" className="lnk-btn">
                Get Started{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Sec End Here --> */}
      {/* <!-- About Us Sec Start Here --> */}
      <section className="about_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="title wow animate__animated animate__slideInLeft">
                  <h3 className="ml2">About Us</h3>
                </div>
                <div className="description wow animate__animated animate__fadeInLeft animate__delay-1s">
                  <p>
                    Companies continuously face various obstacles and Sherwood
                    has been there to assist with proven solutions, since 1992.
                    Our clients come first as we assist in working through their
                    challenging situations. From financial management to
                    monitoring performance, to monetizing IP. Managing a
                    business can be difficult, and Sherwood has developed and
                    implemented successful solutions. Who better than Sherwood
                    knows what can go wrong?
                    <br />
                    <br />
                    Sherwood Partners is dedicated to serving our clients and
                    has a reputation for delivering results. We help our clients
                    comprehend what needs to be done and how we can solve the
                    problem(s). Sherwood is with you through the entire
                    implementation process.
                  </p>
                </div>
                <div className="button-group wow animate__animated animate__slideInLeft animate__delay-2s">
                  <a href="#" className="lnk-btn">
                    About Us{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_box ">
                <figure>
                  <img
                    src={about_img}
                    className="img-fluid wow animate__animated animate__fadeInLeft"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us Sec End Here --> */}
      {/* <!-- Services Sec Start Here --> */}
      <section className="services_sec">
        <div className="container-fluid p-0">
          <div className="row">
            {services.map((data, index) => {
              return (
                <div
                  key={index}
                  className={index % 2 == 0 ? "col-md-6 m-0 p-0" : "col-md-6"}
                >
                  <div className="serive_box">
                    <div className="service-img wow animate__animated animate__zoomIn">
                      <figure>
                        <img src={data.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="service-name wow animate__animated animate__fadeInUp">
                      <h3>{data.name}</h3>
                      <p>{data.des}</p>
                      <a href="#" className="lnk-btn">
                        Learn more{" "}
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- Services Sec End Here --> */}
      {/* <!-- Testimonials Sec Start Here --> */}
      <section className="testimonials_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 p-0">
              <div className="testi-image wow animate__animated animate__fadeInLeft">
                <figure>
                  <img
                    src={testimonails_img}
                    className="img-fluid wow animate__animated animate__fadeInLeft"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="client_reviews">
                <div className="heading">
                  <h3 className="ml15">
                    <span className="word">Client</span>
                    <span className="word">Reviews</span>
                  </h3>
                </div>
                <Slider {...settings}>
                  <div className="testimonials_slider">
                    <div className="testimonial_box">
                      <div className="title">
                        <h3>I am happy with my consultation</h3>
                      </div>
                      <p>
                         I needed an advisor to understand and enhance my
                        business. After so many interviews with other firms, as
                        soon as I met with the Sherwood team, I knew Sherwood
                        was the firm to assist my company and help me make the
                        right decisions. They reviewed all areas of my company
                        and developed a successful solution. The best part was
                        that Sherwood was there through the entire
                        implementation process. “I was never alone.”
                      </p>
                      <div className="bottom-bar">
                        <ul className="rating">
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <h5 className="client-name">Lauren.p stevens</h5>
                      </div>
                    </div>
                  </div>
                  <div className="testimonials_slider">
                    <div className="testimonial_box">
                      <div className="title">
                        <h3>I am happy with my consultation</h3>
                      </div>
                      <p>
                         I am now making more profits with fewer headaches, all
                        because Sherwood helped me better understand my business
                        and how to work through the daily pitfalls. The Sherwood
                        team was great. They quickly evaluated and understood
                        our problems, worked with our team to better understand
                        the potential pitfalls of my business and assisted in
                        implementing change. They were with us all the way for a
                        successful outcome.
                      </p>
                      <div className="bottom-bar">
                        <ul className="rating">
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <h5 className="client-name">Lauren.p stevens</h5>
                      </div>
                    </div>
                  </div>
                  <div className="testimonials_slider">
                    <div className="testimonial_box">
                      <div className="title">
                        <h3>I am happy with my consultation</h3>
                      </div>
                      <p>
                         Sherwood had sound solutions for our business needs.
                        My business was back on a successful path in just 6
                        months after I hired Sherwood.
                      </p>
                      <div className="bottom-bar">
                        <ul className="rating">
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <h5 className="client-name">Lauren.p stevens</h5>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Sec End Here --> */}
      <Footer />
    </>
  );
};

export default Home;
