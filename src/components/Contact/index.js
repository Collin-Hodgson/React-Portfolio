import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="https://user-images.githubusercontent.com/64516562/97791200-5b411100-1b95-11eb-97e6-8efaef754975.JPG"
            class="pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
