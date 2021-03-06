import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import gallery11 from "../../assets/img/gallery11.png";
import gallery12 from "../../assets/img/gallery12.png";
import { Link } from "react-router-dom";

const News = () => {
  const Advisory_services = [
    {
      id: 1,
      name: "News Name",
      img: gallery11,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 2,
      name: "News Name",
      img: gallery12,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 3,
      name: "News Name",
      img: gallery12,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 4,
      name: "News Name",
      img: gallery11,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 5,
      name: "News Name",
      img: gallery12,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },

    {
      id: 6,
      name: "News Name",
      img: gallery12,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },

    {
      id: 7,
      name: "News Name",
      img: gallery12,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
    {
      id: 8,
      name: "News Name",
      img: gallery12,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },

    {
      id: 9,
      name: "News Name",
      img: gallery12,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate eros mollis volutpat ultricies. Interdum et malesuada fames ac ante ipsum primi",
    },
  ];

  return (
    <>
      <Header />
      <PageHeader pagename="The News" pagelinkname="The News" />

      {/* Advisory sec starts here */}
      <section className="Advisory-sec News-sec">
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
                        <span>{data.name.split(" ").slice(1).join(" ")}</span>
                      </h4>
                      <div className="blue-divider"></div>
                      <p>{data.des}</p>

                     <Link to="/Newsdetail"> 
                        Learn more <i className="fa fa-angle-right"></i>
                      </Link>
                      <div className="news-date-day">
                      <h4>02</h4>
                      <h5>Mar</h5>
                    </div>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pagination-all">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* Advisory sec ends here */}
      <Footer />
    </>
  );
};
export default News;
