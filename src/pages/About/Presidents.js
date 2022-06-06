import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/president.css";
// image import starts here
import { winning, manager_img } from "../../constant";
// image import ends here

const Presidents = () => {
  const generalmanager = [
    {
      id: 1,
      img: manager_img,
      designation: "General Manager",
      managername: "John Doe",
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molestie, arcu vel ornare dapibus,",
    },
    {
      id: 2,
      img: manager_img,
      designation: "General Manager",
      managername: "John Doe",
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus molestie urna ut nunc congue sollicitudin. Integer vulputate ligula at turpis tempus consectetur. Nullam non ultrices ipsum. Ut molestie, arcu vel ornare dapibus,",
    },
  ];
  return (
    <>
      <Header />
      {/* page header starts here */}
      <PageHeader
        pagename="Our Co Presidents & Founders"
        pagelinkname="About Us"
      />
      {/* page header ends here */}
      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                  Sherwood Co-Presidents <span>& Founders</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molestie, arcu vel ornare dapibus, tortor quam
                  dapibus libero,
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vulputate eros mollis volutpat ultricies. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Phasellus
                  molestie urna ut nunc congue sollicitudin. Integer vulputate
                  ligula at turpis tempus consectetur. Nullam non ultrices
                  ipsum. Ut molesti.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img-wrapper">
                <figure>
                  <img src={winning} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
      {/* manager-sec starts here */}
      <section className="manager-sec">
        <div className="container">
          <div className="row">
            {generalmanager.map((data, index) => {
              return (
                <div key={index} className="col-md-6">
                  <div className="manager-card-wrapper">
                    <div className="manager-img-wrapper">
                      <figure>
                        <img src={data?.img} />
                      </figure>
                    </div>
                    <div className="manager-content-wrapper">
                      <h5>{data?.designation}</h5>
                      <h3>{data?.managername}</h3>
                      <p>{data?.des}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* manager-sec ends here */}
      <Footer />
    </>
  );
};

export default Presidents;
