import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://avatars0.githubusercontent.com/u/64516562?s=460&u=2778809b5be3b0ba187454d6c12564c0e67c369b&v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
          />
          <p style={{ fontSize: "30px" }}>
            My name is Collin Hodgson. I currently live in Ogden, UT. My hobbies
            are skateboarding, walking/hiking with my dogs, and golfing. I
            currently work at Hill AFB doing basic electrical work however I am
            taking the web development bootcamp at the University of Utah.
          </p>
          <p style={{ fontSize: "30px" }}>
            I am detail orienteed with good verbal and written commuincation
            skills. I have good computer skills and am proficient with Microsoft
            Office. While I am working my current job I am enrolled in the web
            development bootcamp to become a full stack web developer. I
            originally was going to school to obtain a degree in information
            systems, so a lot of classes I have taken can greatly assist me in
            web development.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
