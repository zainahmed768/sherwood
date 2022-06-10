import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import "../../assets/css/contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Contact Us" pagelinkname="Services" />

      {/* Contact section  */}
      <section className="Contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-all">
                <div className="contact-head">
                  <h2>
                    Contact <span>Us</span>
                  </h2>
                  <div className="blue-divider"></div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>

                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">First Name*</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Julia"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Last Name*</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Julia"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Company</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Position</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email*</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Phone Number*</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="123456789"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Purpose Of Contact*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Best Time To Contact*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Your Message*
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="you@example.com"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submitbtn">
                      <button>submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Contact section  */}
      <Footer />
    </>
  );
};

export default Contact;
