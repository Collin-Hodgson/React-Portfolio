import React from "react";

function AboutMe(props) {
  return (
    <div class="row mt-5">
      <section class="col-md-8 m-5 pb-5 bg-light text-dark">
        <h2 class="pl-4 pt-4 pb-2">About Me</h2>

        <div class="px-3 mr-3">
          <hr class="pl-4 pr-4 mpb-2 solid bg-dark" />
          <img
            src="assets/images/me.jpg.HEIC"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
          />
          <p>
            My name is Collin Hodgson. I currently live in Ogden, UT. My hobbies
            are skateboarding, walking/hiking with my dogs, and golfing. I
            currently work at Hill AFB doing basic electrical work however I am
            taking the web development bootcamp at the University of Utah.
          </p>
          <p>
            I am detail orienteed with good verbal and written commuincation
            skills. I have good computer skills and am proficient with Microsoft
            Office. While I am working my current job I am enrolled in the web
            development bootcamp to become a full stack web developer. I
            originally was going to school to obtain a degree in information
            systems, so a lot of classes I have taken can greatly assist me in
            web development.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
