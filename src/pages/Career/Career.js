import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import clock from "../../assets/img/clock.png";
import dollar from "../../assets/img/dollar.png";
import { Link } from "react-router-dom";
import career from "../../assets/css/career.css";

const Career = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Careers" pagelinkname="Services" />

      {/* Career Tabs section  */}
      <section className="career-sec">
        <div className="container">
          <div className="career-head">
            <h2>
              {" "}
              A Great Career <span>Opportunity </span>
            </h2>
            <div className="blue-divider"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="career-tabs-all">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      All Jobs
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-contact"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Recent Jobs
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>IT Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                          <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                           <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>IT Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row for-gap">
                      <div className="col-md-4">
                        <div className="Recent-job-sec">
                          <h3>Senior Manager</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 for-borderss">
                        <div className="full-time">
                          <span>
                            <img src={clock}></img> Full time
                          </span>
                          <span>
                            <img src={dollar}></img> $800/Month
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="view-details">
                        <Link to="/careerdetail">View Details</Link>
                          <div className="Apply-now-btn">
                            <p>5 September 2021</p>
                            <Link to="/Applicationform"> <button>Apply Now</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-all pagination-all-type">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
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
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="Result">
              <p>Result 1 - 15</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Career Tabs section  */}

      <Footer />
    </>
  );
};

export default Career;
