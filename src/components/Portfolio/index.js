import React from "react";
import "./style.css";

function Projects(props) {
  return (
    <div class="row mt-5">
      <section class="col-md-8 m-5 pb-5 bg-white text-dark">
        <h2 class="pl-1 pt-4 pb-1">Portfolio</h2>

        <hr class="pl-4 pr-4 mpb-2 solid bg-dark" />

        <div class="row mt-2">
          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://collin-hodgson.github.io/coderefactor/">
                <img
                  src="assets/images/coderefactor.jpg"
                  alt="Code Refactor"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="text-over-image text-center m-1">Code Refactor</h4>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://collin-hodgson.github.io/responsiveportfolio/">
                <img
                  src="assets/images/portfolio.jpg"
                  alt="Responsive Portfolio"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">Portfolio</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://collin-hodgson.github.io/passwordgenerator/">
                <img
                  src="assets/images/password.PNG"
                  alt="Password Generator"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">Password Generator</h4>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://collin-hodgson.github.io/dayplanner/">
                <img
                  src="assets/images/planner.png"
                  alt="Day Planner"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">Day Planner</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://collin-hodgson.github.io/weatherdashboard/">
                <img
                  src="assets/images/dashboard.png"
                  alt="Weather Dashboard"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">Weather Dashboard</h4>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://drive.google.com/file/d/1V6Eo94SWk8Ox7SalijZLZNSvAAsgQWqR/view?usp=sharing">
                <img
                  src="assets/images/resume.jpg"
                  alt="Resume"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">Resume</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://github.com/Eelektrick/8-bit-bartender">
                <img
                  src="assets/images/cropped-logo.png"
                  alt="8-Bit Bartender"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">8-Bit Bartender</h4>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://github.com/Collin-Hodgson/readmegenerator">
                <img
                  src="assets/images/readme.PNG"
                  alt="README.md Generator"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">README.md Generator</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://github.com/Collin-Hodgson/teamgenerator">
                <img
                  src="assets/images/teamgenerator.PNG"
                  alt="Team Generator"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">Team Generator</h4>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <a href="https://github.com/AtimaB/The-Fight-Club">
                <img
                  src="assets/images/fightclub.PNG"
                  alt="The-Fight-Club"
                  class="card-img-top img-fluid mx-auto d-block"
                />
              </a>
              <h4 class="overlay-text text-center m-1">The Fight Club</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card p-2 shadow border-0">
              <img
                src="assets/images/soon.jpg"
                alt="Coming Soon"
                class="card-img-top img-fluid mx-auto d-block"
              />
              <h4 class="overlay-text text-center m-1">Coming Soon</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
