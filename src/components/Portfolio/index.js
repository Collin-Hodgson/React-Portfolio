import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard>
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://github.com/AtimaB/The-Fight-Club/raw/master/public/assets/images/welcomePage.png"
            alt="Fight Club"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">The Fight Club</MDBCardTitle>
            <MDBCardText>
              As gamers we wanted to create a game that we could play with our
              friends and share with others so they could play with their
              friends
            </MDBCardText>
            <MDBBtn
              href="https://github.com/AtimaB/The-Fight-Club"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            href="https://github.com/Collin-Hodgson/Budget-Trackers"
            src="https://user-images.githubusercontent.com/64516562/94870920-00858f80-0406-11eb-9891-00634c7764d1.PNG"
            alt="Budget"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
            <MDBCardText>
              An app that allows the user to track their withdrawals and
              deposits with or without a data/internet connection
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Collin-Hodgson/Budget-Trackers"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            style={{ width: "100%" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/94640654-84236d00-029c-11eb-8e4f-e65f2c9b4ac1.PNG"
            alt="Fitness"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Fitness Tracker</MDBCardTitle>
            <MDBCardText>
              With this app the user can log all exercises they perform in their
              entire workout.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Collin-Hodgson/WorkoutTracker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard>
          <MDBCardImage
            size="128x128"
            src="https://github.com/Collin-Hodgson/teamgenerator/raw/master/Assets/10-OOP-homework-demo-2.png"
            alt="Team Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Team Profile Generator</MDBCardTitle>
            <MDBCardText>
              A command line application that allows the user to add and remove
              employees with their employee information
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Collin-Hodgson/teamgenerator"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
            alt="MDBCard image cap"
            top
            hover
            overlay="white-slight"
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn color="light-blue" size="md">
              read more
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
            alt="MDBCard image cap"
            top
            hover
            overlay="white-slight"
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn color="light-blue" size="md">
              read more
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
