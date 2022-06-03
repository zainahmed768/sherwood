import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Slider from "react-slick";
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
      des: "We take a holistic approach to understanding your business and developing a business solution specific to your needs.",
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
  return (
    <>
      <Header />
      {/* // <!-- Banner Sec Start Here --> */}
      <section class="banner_sec">
        <div class="container-fluid p-0">
          <div class="banner_image wow animate__animated animate__zoomIn animate__delay-2s">
            <figure>
              <img src={banner_img} class="img-fluid" />
            </figure>
          </div>
        </div>
        <div class="banner_content">
          <div class="container">
            <h2 class="title wow animate__animated animate__fadeInDown animate__delay-2s">
              Sherwood
            </h2>
            <h5 class="wow animate__animated animate__fadeInDown animate__delay-3s">
              THE GOLD STANDARD...Since 1992
            </h5>
            <div class="button-group wow animate__animated animate__fadeInDown animate__delay-5s">
              <a href="#" class="lnk-btn">
                Learn more <i class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Sec End Here --> */}
      {/* <!-- About Us Sec Start Here --> */}
      <section class="about_sec">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about_content">
                <div class="title wow animate__animated animate__slideInLeft">
                  <h3 class="ml2">About Us</h3>
                </div>
                <div class="description wow animate__animated animate__fadeInLeft animate__delay-1s">
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
                <div class="button-group wow animate__animated animate__slideInLeft animate__delay-2s">
                  <a href="#" class="lnk-btn">
                    Learn more{" "}
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="img_box ">
                <figure>
                  <img
                    src={about_img}
                    class="img-fluid wow animate__animated animate__fadeInLeft"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us Sec End Here --> */}
      {/* <!-- Services Sec Start Here --> */}
      <section class="services_sec">
        <div class="container-fluid p-0">
          <div class="row">
            {services.map((data, index) => {
              return (
                <div
                  key={index}
                  class={index % 2 == 0 ? "col-md-6 m-0 p-0" : "col-md-6"}
                >
                  <div class="serive_box">
                    <div class="service-img wow animate__animated animate__zoomIn">
                      <figure>
                        <img src={data.img} class="img-fluid" />
                      </figure>
                    </div>
                    <div class="service-name wow animate__animated animate__fadeInUp">
                      <h3>{data.name}</h3>
                      <p>{data.des}</p>
                      <a href="#" class="lnk-btn">
                        Learn more{" "}
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
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
      <section class="testimonials_sec">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 p-0">
              <div class="testi-image wow animate__animated animate__fadeInLeft">
                <figure>
                  <img
                    src={testimonails_img}
                    class="img-fluid wow animate__animated animate__fadeInLeft"
                  />
                </figure>
              </div>
            </div>
            <div class="col-lg-6 p-0">
              <div class="client_reviews">
                <div class="heading">
                  <h3 class="ml15">
                    <span class="word">Client</span>
                    <span class="word">Reviews</span>
                  </h3>
                </div>
                <Slider {...settings}>
                  <div class="testimonials_slider">
                    <div class="testimonial_box">
                      <div class="title">
                        <h3>I am happy with my consultation</h3>
                      </div>
                      <p>
                        Sherwood Knows the Industry and the Industry Knows
                        Sherwood. “Sherwood was with the team through the entire
                        process”
                      </p>
                      <div class="bottom-bar">
                        <ul class="rating">
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <h5 class="client-name">Lauren.p stevens</h5>
                      </div>
                    </div>
                  </div>
                  <div class="testimonials_slider">
                    <div class="testimonial_box">
                      <div class="title">
                        <h3>I am happy with my consultation</h3>
                      </div>
                      <p>
                        Sherwood Knows the Industry and the Industry Knows
                        Sherwood. “Sherwood was with the team through the entire
                        process”
                      </p>
                      <div class="bottom-bar">
                        <ul class="rating">
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <h5 class="client-name">Lauren.p stevens</h5>
                      </div>
                    </div>
                  </div>
                  <div class="testimonials_slider">
                    <div class="testimonial_box">
                      <div class="title">
                        <h3>I am happy with my consultation</h3>
                      </div>
                      <p>
                        Sherwood Knows the Industry and the Industry Knows
                        Sherwood. “Sherwood was with the team through the entire
                        process”
                      </p>
                      <div class="bottom-bar">
                        <ul class="rating">
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </li>
                        </ul>
                        <h5 class="client-name">Lauren.p stevens</h5>
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
