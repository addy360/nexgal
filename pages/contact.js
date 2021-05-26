import React from 'react'

function Contact() {
  return (
    <div className="row justify-content-center">
            <div className="col-md-6 pt-4" data-aos="fade-up">
              <h2 className="text-white mb-4">Contact Me</h2>
              <div className="row">
                <div className="col-md-12">
                 <p classNameName="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero libero totam neque voluptatem eum provident autem ea distinctio. Incidunt.</p>
                  <div className="row">
                    <div className="col-md-12">
                      <form action="contact.html#">
                        <div className="row form-group">
                          <div className="col-md-6 mb-3 mb-md-0">
                            <label className="text-white" htmlFor="fname"
                              >First Name</label
                            >
                            <input
                              type="text"
                              id="fname"
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="text-white" htmlFor="lname"
                              >Last Name</label
                            >
                            <input
                              type="text"
                              id="lname"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label className="text-white" htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label className="text-white" htmlFor="subject"
                              >Subject</label
                            >
                            <input
                              type="subject"
                              id="subject"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row form-group mb-5">
                          <div className="col-md-12">
                            <label className="text-white" htmlFor="message"
                              >Message</label
                            >
                            <textarea
                              name="message"
                              id="message"
                              cols="30"
                              rows="7"
                              className="form-control"
                              placeholder="Write your notes or questions here..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary btn-md text-white"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Contact
