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
      name: "Business Consulting",
      des: "We take a holistic approach to understanding your business  and developing a business solution specific to your needs.",
      img: services1,
    },
    {
      id: 2,
      name: "Assignment and Liquidations",
      des: "The Gold Standard to the Industry",
      img: services2,
    },
    {
      id: 3,
      name: "Intellectual Property",
      des: "Sales + Licensing + Strategy",
      img: services3,
    },
    {
      id: 4,
      name: "Financial Management",
      des: "We Know The Industry & The Industry Knows Sherwood",
      img: services4,
    },
    {
      id: 5,
      name: "Sales Licenses strategies & advisor",
      des: "",
      img: services5,
    },
    {
      id: 6,
      name: "IP Purchase or lending",
      des: "",
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
              Sherwood
            </h2>
            <h5 className="wow animate__animated animate__fadeInDown animate__delay-3s">
              THE GOLD STANDARD...Since 1992
            </h5>
            <div className="button-group wow animate__animated animate__fadeInDown animate__delay-5s">
              <a href="#" className="lnk-btn">
                Learn more{" "}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse nisl nisl, venenatis at lectus ut, varius
                    eleifend metus. Pellentesque accumsan condimentum ipsum vel
                    pharetra. Nam lacinia, quam quis luctus aliquam, est est
                    maximus eros, et suscipit orci orci pharetra leo. Aliquam
                    tincidunt
                    <br />
                    <br />
                    mollis auctor. Maecenas a convallis augue. Cras lorem ante,
                    posuere a lectus sit amet, vehicula dapibus felis. Donec
                    luctus dignissim maximus. Ut pharetra justo ac lorem tempus,
                    eget porttitor mauris aliquet. Nullam
                  </p>
                </div>
                <div className="button-group wow animate__animated animate__slideInLeft animate__delay-2s">
                  <a href="#" className="lnk-btn">
                    Learn more{" "}
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
                        Sherwood Knows the Industry and the Industry Knows
                        Sherwood. “Sherwood was with the team through the entire
                        process”
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
                        Sherwood Knows the Industry and the Industry Knows
                        Sherwood. “Sherwood was with the team through the entire
                        process”
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
                        Sherwood Knows the Industry and the Industry Knows
                        Sherwood. “Sherwood was with the team through the entire
                        process”
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
