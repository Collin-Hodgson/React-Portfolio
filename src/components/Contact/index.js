import React from "react";

function ContactInfo() {
  return (
    <div class="row mt-5">
      <section class="col-md-8 m-5 pb-5 pr-4 bg-light text-dark">
        <h2 class="pl-4 pt-4 pb-1">Contact</h2>

        <div class="px-3 mr-3">
          <hr class="pl-4 pr-4 mpb-2 solid bg-dark" />
          <form action="#">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control border-dark border-success"
                placeholder="Enter name"
                id="name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control border-dark border-success"
                placeholder="Enter email"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="comment">Message</label>
              <textarea
                class="form-control border-dark border-success"
                rows="5"
                id="comment"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-outline-info">
              <strong>Submit</strong>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactInfo;
