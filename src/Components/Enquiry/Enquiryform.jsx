import React, { useState } from "react";
import "./EnquiryForm.css";

function Enquiryform() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [label_name, setlabelName] = useState("");
  const [label_mobile, setlabelMobile] = useState("");
  const [label_mail, setlabelMail] = useState("");

  const Regex =
    /([a-zA-z0-9. -_]{1,20})+@+([a-zA-Z]{1,10})+\.+([a-zA-Z]{1,10})/;
  const submitForm = (e) => {
    if (!Regex.test(mail)) {
      alert("Your Mail Id" + " " + mail + " " + "is incorrect");
    }
    e.preventDefault();
    if (name.length === 0) {
      setlabelName("Incorrect");
    } else if (mobile.length === 0) {
      setlabelMobile("Incorrect");
    } else if (mail.length === 0) {
      setlabelMail("Incorrect");
    } else {
      setlabelMail("");
      setlabelMobile("");
      setlabelName("");
    }
  };

  return (
    <div className="main_form">
      <div className="Enquiry">
        <div className="Enquiry_head">
          {/* <div class="snowflakes" aria-hidden="true">
            <div class="snowflake">❅</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❄</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❄</div>
            <div class="snowflake">❅</div>
            <div class="snowflake">❆</div>
            <div class="snowflake">❄</div>
          </div> */}
          <h1 id="form_head" data-aos="flip-right" data-aos-duration="2000">
            Who Can Join Us ?
          </h1>
        </div>
      </div>
      <div className="form-container" data-aos="zoom-in-up">
        <div
          className="form-content"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="form-con">
            <div className="form-con-btn">
              <button id="form-one">1</button>
            </div>
            <div className="form-con-content">
              <h3>College Students</h3>
              <p>
                Students of all semesters eventually looking to get placed in IT
                Companies
              </p>
            </div>
          </div>
          <div className="form-con">
            <div className="form-con-btn">
              <button id="form-one">2</button>
            </div>
            <div className="form-con-content">
              <h3>Fresher Graduates</h3>
              <p>
                Students with or without backpapers looking for a job in
                software industry
              </p>
            </div>
          </div>
          <div className="form-con">
            <div className="form-con-btn">
              <button id="form-one">3</button>
            </div>
            <div className="form-con-content">
              <h3>Placed Students</h3>
              <p>
                Computer/Non-Computer students placed in MNCs like infy,
                UST looking to pass their probationary exams
              </p>
            </div>
          </div>
          <div className="form-con">
            <div className="form-con-btn4 form-con-btn ">
              <button id="form-one">4</button>
            </div>
            <div className="form-con-content">
              <h3>Professionals</h3>
              <p>
                People looking to switch their non-tech career to design/
                development/testing
              </p>
            </div>
          </div>
        </div>
        <div className="form-main" data-aos="zoom-in" data-aos-duration="2000">
          <form autoComplete="on" className="form-sub-content">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                id="form-name"
                spellCheck="false"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />{" "}
              <label id="name_label">{label_name}</label>
              <br />
              <input
                type="number"
                name="number"
                placeholder="Enter your Mobile Number"
                id="form-num"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <label id="mobile_label">{label_mobile}</label>
              <br />
              <input
                type="email"
                name="mail"
                placeholder="Enter your E-mail"
                id="form-mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />{" "}
              <label id="mail_label">{label_mail}</label>
              <br />
            </div>
            <br />
            <div className="course-select">
              <label>Degree : </label>
              <select id="course-select">
                <option hidden>Choose Degree</option>
                <option>PG</option>
                <option>UG</option>
                <option>Diploma</option>
                <option>School</option>
              </select>
            </div>{" "}
            <br />
            <div className="course-select">
              <label>Course : </label>
              <select id="course-select">
                <option hidden>Choose Course</option>
                <option>Python</option>
                <option>Java</option>
                <option>MERN Stack</option>
                <option>Tally</option>
              </select>
            </div>
            <table className="form">
              <tr id="form-radioT">
                <div>
                  <th>Mode of Training:</th>
                </div>
                  <td id="formData">
                    <span>
                      <input type="radio" name="mode" id="radiobtn" />
                      Online
                    </span>
                  </td>
                  <td id="formData1">
                    <span>
                      <input type="radio" name="mode" id="radiobtn" />
                      Offline
                    </span>
                  </td>
              </tr>
              <tr id="form-radioT">
                <div>
                  <th>Batches: </th>
                </div>
                  <td id="formData">
                    <span>
                      <input type="radio" name="batch" id="radiobtn" />
                      Weekdays
                    </span>
                  </td>
                  <td id="formData1">
                    <span>
                      <input type="radio" name="batch" id="radiobtn" />
                      Weekend
                    </span>
                  </td>
              </tr>
            </table>
            <div id="form-radio">
              {" "}
              <span>Mode of Training : </span>
              <div id="form-radio-btn">
                <span>
                  <input type="radio" name="mode" value="online" /> Online
                </span>
                <span>
                  <input type="radio" name="mode" value="offline" /> Offline
                </span>
              </div>
            </div>
             <div id="form-radio2">
              {" "}
              <span>Batches : </span>
              <div id="form-radio-btn2">
                <span>
                  <input type="radio" name="batch" value="Weekdays" /> Weekdays
                </span>
                <span>
                  <input type="radio" name="batch" value="Weekend" /> Weekend
                </span>
              </div>
            </div>
            <div className="form-btn1">
              <button className="form-btn" onClick={submitForm}>
                Enquire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquiryform;
