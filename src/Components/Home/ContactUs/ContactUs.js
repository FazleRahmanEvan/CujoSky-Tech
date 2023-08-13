import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail','CujoSky', e.target, 'Nk8k9Ap_fZYvnj-Mr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section className="mt-5 font-abc shadow-xl w-auto  ">
      <h1 className="text-4xl text-center font-semibold   mb-2 mt-8">
        Contact{" "}
        <span className="underline decoration-violet-500 underline-offset-[20px]">
          With Our
        </span>{" "}
        Team
      </h1>
      <p className="text-center text-gray-400 mt-8">
      Contact us today to learn more about how we can help you with your IT
       needs.
      </p>

      <div className="flex flex-col justify-evenly mt-8 sm:flex-row pl-2">
        <div>
          <img alt=""
            src="https://i.ibb.co/rm66HcD/Contact-us.png"
            className="max-w-sm rounded-lg "
          />
        </div>
        <form id='contact' ref={form} onSubmit={sendEmail} >
        <div className="sm:text-center">
          <h1 className="text-start text-gray-400 text-xl font-medium mb-5 ">
            Get in Touch
          </h1>
          <div className="grid grid-cols-1  gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered input-primary input-sm w-96"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered input-primary input-sm  w-96"
            />

            <textarea
              className="textarea textarea-borderd textarea-primary w-96"
              name="message"
              placeholder="Your Message"
              rows={6}
            ></textarea>
          </div>
          <button className="text-start mt-5 btn btn-sm uppercase text-white rounded-full py-1 bg-gradient-to-br from-primary to-secondary pr-10 pl-10 mb-28">
            Submit
          </button>
        </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
