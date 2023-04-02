import React, { useState } from "react";

export default function Contacts() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-fluid" id="contact">
      <div className="row p-30-0">
        {/* <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Contact information</h4>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4">
          <div className="art-a art-card">
            <div className="art-table p-15-15">
              <ul>
                <li>
                  <h6>Country:</h6>
                  <span>Nigeria</span>
                </li>
                <li>
                  <h6>City:</h6>
                  <span>Lagos</span>
                </li>

                <li>
                  <h6>Streat:</h6>
                  <span>Bayo Oyewale Street</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4">
          <div className="art-a art-card">
            <div className="art-table p-15-15">
              <ul>
                <li>
                  <h6>Email:</h6>
                  <span>chukwuemekaifeora@gmail.com</span>
                </li>
                <li>
                  <h6>Instagram:</h6>
                  <span>@ifeora_emeka</span>
                </li>
                <li>
                  <h6>Skype:</h6>
                  <span>ifeora_emeka</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4">
          <div className="art-a art-card">
            <div className="art-table p-15-15">
              <ul>
                <li>
                  <h6>Support service:</h6>
                  <span>+234 8179531223</span>
                </li>
                <li>
                  <h6>Office:</h6>
                  <span>+234 08081008437</span>
                </li>
                <li>
                  <h6>Personal:</h6>
                  <span>+123 08081008437</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Get in touch</h4>
            </div>
          </div>

          <div className="art-a art-card">
            {sent ? (
              <div className="text-center pt-5 pb-5">
                <i className="fas fa-check art-link art-color-link" style={{ fontSize: '100px'}}></i>
                <h2>Your message has been sent.</h2>
                <h4 className="text-muted mt-4">
                  Chukwuemeka will reach out to you soon.
                </h4>
              </div>
            ) : (
              <form id="form" className="art-contact-form">
                <div className="art-form-field">
                  <input
                    id="name"
                    name="name"
                    className="art-input"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <label for="name">
                    <i className="fas fa-user"></i>
                  </label>
                </div>
                <div className="art-form-field">
                  <input
                    id="email"
                    name="email"
                    className="art-input"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <label for="email">
                    <i className="fas fa-at"></i>
                  </label>
                </div>
                <div className="art-form-field">
                  <textarea
                    id="message"
                    name="text"
                    className="art-input"
                    placeholder="Message"
                    required
                  ></textarea>
                  <label for="message">
                    <i className="far fa-envelope"></i>
                  </label>
                </div>
                <div className="art-submit-frame">
                  <button
                    className="art-btn art-btn-md art-submit"
                    type="submit"
                  >
                    <span>Send message</span>
                  </button>
                  <div className="art-success">
                    Success <i className="fas fa-check"></i>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
