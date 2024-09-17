import React, { useRef } from "react";
import "./About.css";
// import cardHead1 from "../../../public/assets/Images/cardhead1.png";

const About = () => {
  const missionRef = useRef(null);

  const handleLearnMoreClick = () => {
    if (missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="About_Main">
      <div>
        <div className="About">
          <div className="About_head">
            <h1>About Us</h1>
            <br />
            <h2>Home/About</h2>
          </div>
        </div>
        <div className="About_Content">
          <div className="About_Info">
            <div
              className="About_Animation"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="./assets/Images/about.png" alt="card"></img>
            </div>
            <div
              className="About_us"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h2>About Us</h2>
              </div>
              <div className="About_Info_head">
                <h1>Nurture InfoTech</h1>
              </div>
              <div>
                <p className="About_para">
                  At NURTURE IT - Erode, We transform trainees into technocrats
                  by providing a state of art in class experience with real time
                  hands on programs. Nurture also emphasize on the soft skills
                  which plays a vital role in making over of student into a
                  professional and also helps them to understand their roles and
                  responsibilities in the company. We not only train the
                  students but also counsel them to find out their best interest
                  by identifying their real needs and potential. The trainee’s
                  here are trained, groomed and nurtured to be buddy
                  professionals. Our training methodology is practical and
                  designed to suit trainee’s minds and also to cater the needs
                  of varied set of clients
                </p>
              </div>
              <div>
                <button class="btn-donate" onClick={handleLearnMoreClick}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={missionRef}>
        <div className="Mission">
          <h2 className="Mission_head">Our Mission?</h2>

          <div className="mission_grid">
            <div
              class="mission_img"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="./assets/Images/mission.png" alt="card"></img>
            </div>
            <div
              className="Mission_content"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p className="Mission_para">
                At Nurture InfoTech, our mission is to bridge the gap between
                ambition and achievement through the transformative power of
                education. We are committed to equipping students with the
                knowledge and skills necessary to excel in the software
                industry. Our goal is to foster a love for learning, nurture
                creativity, and prepare students for success in an ever-evolving
                world. We believe that education is the key to unlocking
                potential and driving progress. At Nurture InfoTech, we strive
                to create an environment where students can thrive, innovate,
                and reach their full potential. Our dedicated team of educators
                and industry professionals works tirelessly to provide
                high-quality instruction, hands-on experience, and personalized
                support to ensure that each student achieves their goals. We
                understand the challenges of the modern world and aim to empower
                our students with the tools they need to navigate and succeed in
                a rapidly changing landscape. At Nurture InfoTech, we are
                passionate about making a positive impact on the lives of our
                students and helping them turn their aspirations into reality.
              </p>
            </div>
          </div>
        </div>
        <div className="Mission">
          <h2 className="Mission_head">Our Vision?</h2>
          <div className="mission_grid">
            <div
              class="mission_img"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="./assets/Images/mission.png" alt="card"></img>
            </div>
            <div
              className="Vision_content"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="Vision_para">
                At Nurture InfoTech, our vision is to be a catalyst for positive
                change, inspiring innovation and transforming lives. We envision
                a future where our commitment to excellence, sustainability, and
                inclusivity creates a lasting impact on individuals and
                communities alike. Through cutting-edge solutions, ethical
                practices, and a dedication to continuous improvement, we strive
                to be a beacon of positive influence in our industry, fostering
                a world where possibilities are limitless, and aspirations are
                turned into reality.
              </p>
            </div>
          </div>

          {/* <div
            class="cube-container"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Vision />
          </div> */}
        </div>
        <div className="Mission">
          <h2 className="Mission_head">Our Philosophy?</h2>
          <div className="mission_grid">
            {" "}
            <div
              class="mission_img"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="./assets/Images/mission.png" alt="card"></img>
            </div>
            <div
              className="Mission_content"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p className="Mission_para">
                At Nurture Infotech, our philosophy stands as the bedrock of our
                unwavering commitment to fostering excellence in education and
                empowering individuals to not only navigate but thrive in the
                ever-evolving landscape of Information Technology. Our core
                principles are not just guiding lights; they are the embodiment
                of our dedication to providing a transformative learning
                experience that transcends the bounds of conventional education.
              </p>
            </div>
          </div>
          {/* <div
            class="cube-container"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Philosophy />
          </div> */}
        </div>
      </div>
      <section className="Why_Section">
        <div>
          <div>
            <h1 className="Why_Head">Why Choose Us?</h1>
          </div>
        </div>
        <div className="Total_card1">
          <div class="card shadow">
            <div className="card_header">
              <div>
                <img
                  src="./assets/Images/cardhead1.png"
                  className="cardimg"
                  alt="card"
                ></img>
              </div>

              <h1 className="card_head">Training By Industrial Experts</h1>
            </div>
            <p className="card_para">
              We ensure an exceptionally dynamic live online also as offline
              training that can be utilized everywhere, with devoted colleagues
              who assist us with arriving at our customer fulfillment
              responsibility.{" "}
            </p>
          </div>
          <div class="card shadow">
            <div className="card_header">
              <div>
                <img
                  src="./assets/Images/cardhead2.png"
                  className="cardimg"
                  alt="card"
                ></img>
              </div>
              <h1 className="card_head">Training On Latest Technologies </h1>
            </div>

            <p className="card_para">
              Our training sections have gained high quality, participation and
              involvement through keep following the vibrant trend by
              implementing latest technologies, tools and utilizing advanced
              software technologies.{" "}
            </p>
          </div>
          <div class="card shadow">
            <div className="card_header">
              <div>
                <img
                  src="./assets/Images/cardhead3.png"
                  className="cardimg"
                  alt="card"
                ></img>
              </div>
              <h1 className="card_head">Skill Enhancement Program </h1>
            </div>

            <p className="card_para">
              We offer a wide assortment of self-improvement programs to
              students, pointed toward developing significant job related
              delicate abilities.{" "}
            </p>
          </div>
        </div>
        <div className="Total_card2">
          <div class="card shadow">
            <div className="card_header">
              <div>
                <img
                  src="./assets/Images/cardhead4.png"
                  className="cardimg"
                  alt="card"
                ></img>
              </div>
              <h1 className="card_head">Resume Preparation Assistance </h1>
            </div>

            <p className="card_para">
              {" "}
              With advancement and uniqueness, our group will assist you with
              drafting a quality resume featuring your abilities and skill for
              your vocation.
            </p>
          </div>
          <div class="card shadow">
            <div className="card_header">
              <div>
                <img
                  src="./assets/Images/cardhead5.png"
                  className="cardimg"
                  alt="card"
                ></img>
              </div>
              <h1 className="card_head">Mock Interviews </h1>
            </div>

            <p className="card_para">
              We plan mock interviews for every trainee with the assistance of
              our industry experienced mentors and the business proficient
              organization to assist them with understanding their qualities and
              shortcomings.{" "}
            </p>
          </div>
          <div class="card shadow">
            <div className="card_header">
              <div>
                <img
                  src="./assets/Images/cardhead6.png"
                  className="cardimg"
                  alt="card"
                ></img>
              </div>
              <h1 className="card_head">Real Time Assignments </h1>
            </div>

            <p className="card_para">
              Our students are provided with live projects and assignments by
              our master trainers with an inside and out execution and also make
              use of various innovative technologies for creating them.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
