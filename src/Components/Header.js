import React from "react";
// header logo starts here
import { logo } from "../constant";

const Header = () => {
  return (
    <>
      {/* // <!-- Header Start Here --> */}
      <header id="headerTop">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4">
              <div className="logoDv">
                <a href="index.php">
                  <figure>
                    <img src={logo} className="img-fluid" />
                  </figure>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-1">
              <div className="navbar_menus">
                <ul className="menus">
                  <li className="menu-items">
                    <a href="index.php" className="menu-link">
                      Home
                    </a>
                  </li>
                  <li className="menu-items">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About Us
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Co Presidents | Founders
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Professionals
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Board Members
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-items">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Business Advisory Services
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Corporate Restructuring
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Asset Liquidation and Monetization
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Financial Management
                          </a>
                        </li>
                        <li className="inner-dropdown">
                          <a className="dropdown-item" href="#">
                            Agency Ip{" "}
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <ul className="inner-dropdown-menu">
                            <li className="dropdown-item">
                              <a href="#">Agency Ip Overview</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Sales & Licensing</a>
                            </li>
                            <li className="dropdown-item">
                              <a href="#">Strategy</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Liquidating Trust Agents | Distribution Agents
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Debt Restructuring & Management
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Wellness Reviews
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Cash Management
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-items">
                    <a href="index.php" className="menu-link">
                      Affiliations & Memberships
                    </a>
                  </li>
                  <li className="menu-items">
                    <a href="index.php" className="menu-link">
                      News
                    </a>
                  </li>
                  <li className="menu-items">
                    <a href="index.php" className="menu-link">
                      Blogs
                    </a>
                  </li>
                  <li className="menu-items">
                    <a href="index.php" className="menu-link">
                      Contact Us
                    </a>
                  </li>
                  <li className="menu-items">
                    <a href="index.php" className="menu-link">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-7">
              <div className="right-menus">
                <div className="social_medias">
                  <label>Follow Us</label>
                  <ul className="icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="search-icons">
                  <button className="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="canvas_btn">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End Here --> */}

      {/* <!-- Mobile Header Start Here --> */}
      <div className="mobile_header">
        <div className="cancel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#000"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <ul className="mobile_menus">
          <li className="menu_items">
            <a className="menu_links active_menu" href="home.php">
              Home
            </a>
          </li>
          <li className="menu_items">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="innerMenu1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseinnerMenu1"
                    aria-expanded="false"
                    aria-controls="collapseinnerMenu1"
                  >
                    About Us
                  </button>
                </h2>
                <div
                  id="collapseinnerMenu1"
                  className="accordion-collapse collapse"
                  aria-labelledby="innerMenu1"
                  data-bs-parent="#accordionExample1"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Co Presidents | Founders</a>
                      </li>
                      <li>
                        <a href="#">Professionals</a>
                      </li>
                      <li>
                        <a href="#">Board Members</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="menu_items">
            <div className="accordion" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headinginnerMenu2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseinnerMenu2"
                    aria-expanded="false"
                    aria-controls="collapseinnerMenu2"
                  >
                    Services
                  </button>
                </h2>
                <div
                  id="collapseinnerMenu2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headinginnerMenu2"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Business Advisory Services</a>
                      </li>
                      <li>
                        <a href="#">Corporate Restructuring</a>
                      </li>
                      <li>
                        <a href="#">Asset Liquidation and Monetization</a>
                      </li>
                      <li>
                        <a href="#">Financial Management</a>
                      </li>
                      <li>
                        <div className="accordion" id="accordionExample3">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headinginnerMenu3"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseinnerMenu3"
                                aria-expanded="false"
                                aria-controls="collapseinnerMenu3"
                              >
                                Agency IP <i className="fa fa-angle-right"></i>
                              </button>
                            </h2>
                            <div
                              id="collapseinnerMenu3"
                              className="accordion-collapse collapse"
                              aria-labelledby="headinginnerMenu3"
                              data-bs-parent="#accordionExample3"
                            >
                              <div className="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">Agency Ip Overview</a>
                                  </li>
                                  <li>
                                    <a href="#">Sales & Licensing</a>
                                  </li>
                                  <li>
                                    <a href="#">Strategy</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          Liquidating Trust Agents | Distribution Agents
                        </a>
                      </li>
                      <li>
                        <a href="#">Debt Restructuring & Management</a>
                      </li>
                      <li>
                        <a href="#">Wellness Reviews</a>
                      </li>
                      <li>
                        <a href="#">Cash Management</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Affiliations & Memberships
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              News
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Blogs
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Contact Us
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Careers
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- Mobile Header End Here --> */}
    </>
  );
};

export default Header;
