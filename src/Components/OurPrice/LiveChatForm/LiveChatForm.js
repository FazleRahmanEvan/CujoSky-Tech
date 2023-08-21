import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const LiveChatForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1m2hb7e', 'template_q1dygsg', form.current, 'Nk8k9Ap_fZYvnj-Mr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div>
    <form ref={form} onSubmit={sendEmail} method="dialog" className="modal-box">
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
            <input
              type="text"
              name="phone number"
              placeholder="phone number"
              className="input input-bordered input-primary input-sm  w-96"
            />

            <textarea
              className="textarea textarea-borderd textarea-primary w-96"
              name="message"
              placeholder="Your Message"
              rows={6}
            ></textarea>
          </div>
    <div >
      {/* if there is a button in form, it will close the modal */}
      <button className="w-16 h-10 bg-primary text-white hover:bg-gradient-to-br from-primary to-secondary  hover:text-white">Send</button>
    </div>
            </form>

            <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
        </div>
    );
};

export default LiveChatForm;