import React from "react";

export default function Contacts() {
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Contact information</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="art-a art-card">
            <div className="art-table p-15-15">
              <ul>
                <li>
                  <h6>Country:</h6>
                  <span>Canada</span>
                </li>
                <li>
                  <h6>City:</h6>
                  <span>Toronto</span>
                </li>

                <li>
                  <h6>Streat:</h6>
                  <span>20 Dellbank Rd</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="art-a art-card">
            <div className="art-table p-15-15">
              <ul>
                <li>
                  <h6>Email:</h6>
                  <span>carter.inbox@mail.com</span>
                </li>
                <li>
                  <h6>Telegram:</h6>
                  <span>@arter</span>
                </li>
                <li>
                  <h6>Skype:</h6>
                  <span>Arter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="art-a art-card">
            <div className="art-table p-15-15">
              <ul>
                <li>
                  <h6>Support service:</h6>
                  <span>+78 (098) 333 11 22</span>
                </li>
                <li>
                  <h6>Office:</h6>
                  <span>+78 (098) 326 11 22</span>
                </li>
                <li>
                  <h6>Personal:</h6>
                  <span>+78 (077) 114 26 53</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Get in touch</h4>
            </div>
          </div>

          <div className="art-a art-card">
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
                <button className="art-btn art-btn-md art-submit" type="submit">
                  <span>Send message</span>
                </button>
                <div className="art-success">
                  Success <i className="fas fa-check"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
