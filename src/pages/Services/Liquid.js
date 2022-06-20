import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import liquid from "../../assets/img/liquid.png";
import l1 from "../../assets/img/l1.png";
import l2 from "../../assets/img/l2.png";
import l3 from "../../assets/img/l3.png";
import l4 from "../../assets/img/l4.png";
import l5 from "../../assets/img/l5.png";
import "../../assets/css/advisory.css";
import { Link } from "react-router-dom";


const Liquid = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "Our Experience",
      img: l1,
      link:"/fund",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
      
    },
    {
      id: 2,
      name: "Advisory Services",
      img: l2,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
      
    },
    {
      id: 3,
      name: "Interim Management",
      img: l3,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
      
    },
    {
      id: 4,
      name: "Family Held Business",
      img: l4,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
      
    },
    {
      id: 5,
      name: "Special Circumtances",
      img: l5,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
     
    },
  ];


  return (
    <>
      <Header />
      <PageHeader
        pagename="Asset Liquidation and Monetization"
        pagelinkname="Services"
      />

      {/* winning sec starts here */}
      <section className="winning-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper Monetization ">
                <h3>
                  Asset Liquidation <span>and Monetization</span>
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
                  <img src={liquid} className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* winning sec ends here */}

      {/* Page Blogs section  */}
      {/* <section className="pageblog-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="whole-blog">
                <div className="blogimg">
                  <img src={l1}></img>
                </div>

                <div className="content-wrapper">
                  <h3>
                    Assignments for the <span>benefit of creditors</span>
                  </h3>
                  <div className="blue-divider"></div>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End of Page Blogs section  */}

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
                     
                      <Link to="/">
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
  )
};
export default Liquid;
