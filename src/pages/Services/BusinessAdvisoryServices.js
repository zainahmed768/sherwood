import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import { Link } from "react-router-dom";
import "../../assets/css/advisory.css";
import {
  serv1img,
  advisory1,
  advisory2,
  advisory3,
  advisory4,
  advisory5,
} from "../../constant";

const BusinessAdvisoryServices = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "Our Experience",
      img: advisory1,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 2,
      name: "Advisory Services",
      img: advisory2,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 3,
      name: "Interim Management",
      img: advisory3,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 4,
      name: "Family Held Business",
      img: advisory4,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 5,
      name: "Special Circumtances",
      img: advisory5,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
  ];
  return (
    <>
      <Header />
      {/* page header starts here */}
      <PageHeader
        pagename="Business Advisory Services"
        pagelinkname="Services"
      />
      {/* page header ends here */}
      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                  Business Advisory <span>Services</span>
                </h3>
                <div className="blue-divider"></div>
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
              <div className="img-wrapper img-effect">
                <figure>
                  <img src={serv1img} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
      {/* Advisory sec starts here */}
      <section className="Advisory-sec">
        <div className="container">
          <div className="row">
            {Advisory_services.map((data, index) => {
              return (
                <div className="col-lg-4">
                  <div
                    className={"Advisory-card-wrapper Advisory-card-" + data.id}
                  >
                    <div className="Advisory-img-wrapper">
                      <figure>
                        <img src={data.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="Advisory-content-wrapper">
                      <h4>
                        {data.name.split(" ")[0]}{" "}
                        <span>
                          {data.name.split(" ").slice(1).join(' ')}
                        </span>
                      </h4>
                      <div className="blue-divider"></div>
                      <p>{data.des}</p>
                      <Link to={`/ourexperince/${data?.id}`} className="#">
                        Learn more <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Advisory sec ends here */}
      <Footer />
    </>
  );
};

export default BusinessAdvisoryServices;
