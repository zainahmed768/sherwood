import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/services.css";
import {
  servicesimg,
  serv1,
  sericon,
  serv3,
  serv2,
  serv4,
  serv5,
  serv6,
  serv7,
  serv8,
  serv9,
} from "../../constant";
import { Link } from "react-router-dom";

const Services = () => {
  const services_item = [
    {
      id: 1,
      img: serv1,
      name: "Business Advisory Services",
      path: "/BusinessAdvisoryServices",
    },
    {
      id: 2,
      img: serv2,
      name: "Asset Liquidation & Monetization",
      path: "/BusinessAdvisoryServices",

    },
    {
      id: 3,
      img: serv3,
      name: "Financial Management",
      path: "/BusinessAdvisoryServices",

    },
    {
      id: 4,
      img: serv4,
      name: "agency Ip",
      path: "/BusinessAdvisoryServices",
    },
    {
      id: 5,
      img: serv4,
      name: "Liquidating Trust Agents | Distribution Agents",
      path: "/BusinessAdvisoryServices",
    },
    {
      id: 4,
      img: serv6,
      name: "Corporate Restructuring",
      path: "/BusinessAdvisoryServices",
    },
    {
      id: 4,
      img: serv7,
      name: "Debt Restructuring & Management",
      path: "/BusinessAdvisoryServices",
    },
    {
      id: 8,
      img: serv4,
      name: "Wellness Review",
      path: "/BusinessAdvisoryServices",
    },
    {
      id: 9,
      img: serv4,
      name: "Cash Management",
      path: "/BusinessAdvisoryServices",
    },
  ];
  return (
    <>
      <Header />
      {/* page header starts here */}
      <PageHeader pagename="Sherwood Services" pagelinkname="Services" />
      {/* page header ends here */}
      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <h3>
                  Sherwood <span>Services</span>
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
                  <img src={servicesimg} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}
      {/* services starts here  */}
      <section className="serv-sec">
        <div className="container">
          <div className="row">
            {services_item.map((data, index) => {
              return (
                <div key={index} className={"col-lg-4 services-" + index}>
                  <div
                    onClick={() =>
                      (window.location.href = "/BusinessAdvisoryServices")
                    }
                    className="services-card-wrapper"
                  >
                    <div className="services-img-wrapper">
                      <figure>
                        <img src={data?.img} className="img-fluid" />
                      </figure>
                    </div>
                    <div className="services-content-wrapper">
                      <img src={sericon} className="img-fluid" />
                      <Link to={data?.path}><h4>{data?.name}</h4></Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* services ends here  */}
      <Footer />
    </>
  );
};

export default Services;
