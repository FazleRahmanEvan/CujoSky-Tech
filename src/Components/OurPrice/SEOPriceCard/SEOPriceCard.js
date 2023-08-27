import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const SEOPriceCard = () => {
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
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:ml-32 lg:px-20 px-6'>
            <div className="card w-80 bg-base-100 shadow-xl border-4 border-primary mt-24 mb-28">
  <div className="card-body ml-4">
  <button className="bg-gray-200  w-48 h-8 mt-6 text-xl ml-4 text-center font-semibold rounded">BRONZE PLAN</button>
    <p className='ml-3'>Small to medium businesses.</p>
    <div className='divider'></div>
    <div>
        <h2 className='text-3xl font-bold text-center mr-8'>$500</h2>
        <p className='text-gray-500 text-xl font-semibold mt-3 mb-3'>MONTHLY CONTRACT</p>
    </div>
    <div className='divider'></div>

    <div className='text-center'>
        <h2 className='text-xl font-bold mb-4'>Google My Business</h2>
        <p className='mt-7 mb-2'>Optimization</p>
        <p className='mt-3 mb-2'>Monthly Management</p>
        <p className='mt-3 mb-2'>2x Monthly Posts</p>
        <p className='mt-3 mb-2'>Google Review Assistance</p>
        <p className='mt-3 mb-2'>100 Local Citations (OneTime)</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold'>On Site</h2>
        <p className='mt-3 mb-2'>Full Website Audit</p>
        <p className='mt-3 mb-2'>Site Optimization</p>
        <p className='mt-3 mb-2'>Contetnt Strategy</p>
        <p className='mt-3 mb-2'>1x Monthly Blog Post</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold'>Off Site</h2>
        <p className='mt-3 mb-2'>2x Guest Post Links</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold'>Management</h2>
        <p className='mt-3 mb-2'>Monthly Video Report</p>
        <p className='mt-7 mb-2'>$500 ONE-TIME SETUP</p>
    </div>
<div>
    
</div>
    <div className='mt-5 mb-3 ml-1'>
    <button className="bg-stone-800 hover:bg-slate-800 text-white w-56 h-12  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_1.showModal()}>Start Live Chat</button>
<dialog id="my_modal_1" className="modal">
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
    <div className='mt-6 text-center'>
      {/* if there is a button in form, it will close the modal */}
      <button className="w-16 h-10 bg-primary text-white hover:bg-gradient-to-br from-primary to-secondary  hover:text-white">Send</button>
    </div>
            </form>

            <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>

</dialog>
    </div>

  </div>
        </div>


        <div className="card w-80 bg-gradient-to-br from-secondary to-primary mt-10 shadow-xl border-4 border-black mb-36">
  <div className="card-body ml-4">
  <button className="bg-gray-100  hover:text-black w-52 h-10 mt-6 text-2xl ml-4 text-center font-semibold rounded">SILVER PLAN</button>
    <p className='ml-3 text-white'>Medium to large businesses.</p>
    <div className='divider divider-white'></div>
    <div>
        <h2 className='text-5xl text-white font-bold text-center mr-8'>$800</h2>
        <p className='text-white text-xl font-semibold mt-3 mb-3'>MONTHLY CONTRACT</p>
    </div>
    <div className='divider'></div>

    <div className='text-center'>
        <h2 className='text-white text-xl font-bold mb-4'>Google My Business</h2>
        <p className='mt-7 mb-2 text-white'>Optimization</p>
        <p className='mt-3 mb-2 text-white'>Monthly Management</p>
        <p className='mt-3 mb-2 text-white'>2x Monthly Posts</p>
        <p className='mt-3 mb-2 text-white'>Google Review Assistance</p>
        <p className='mt-3 mb-2 text-white'>100 Local Citations (OneTime)</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold text-white'>On Site</h2>
        <p className='mt-3 mb-2 text-white'>Full Website Audit</p>
        <p className='mt-3 mb-2 text-white'>Site Optimization</p>
        <p className='mt-3 mb-2 text-white'>Contetnt Strategy</p>
        <p className='mt-3 mb-2 text-white'>3x Monthly Blog Post</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold text-white'>Off Site</h2>
        <p className='mt-3 mb-2 text-white'>3x Guest Post Links</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold text-white'>Management</h2>
        <p className='mt-3 mb-2 text-white'>Monthly Video Report</p>
        <p className='mt-7 mb-2 text-white'>$500 ONE-TIME SETUP</p>
    </div>

    <div className='mt-5 mb-3 ml-1'>
    <button className="bg-amber-200  hover:bg-amber-100  w-56 h-12 text-black  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_2.showModal()}>Start Live Chat</button>
<dialog id="my_modal_2" className="modal">
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
          <div className='mt-6 text-center'>
      {/* if there is a button in form, it will close the modal */}
      <button className="w-16 h-10 bg-primary text-white hover:bg-gradient-to-br from-primary to-secondary  hover:text-white">Send</button>
    </div>
            </form>

            <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
  
</dialog>
    </div>

  </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl border-4 border-primary mt-24 mb-28">
  <div className="card-body ml-4">
  <button className="bg-gray-200  w-48 h-8 mt-6 text-xl ml-4 text-center font-semibold rounded">GOLD PLAN</button>
    <p className='ml-3'>For websites with 75+ pages</p>
    <div className='divider'></div>
    <div>
        <h2 className='text-3xl font-bold text-center mr-8'>$1000</h2>
        <p className='text-gray-500 text-xl font-semibold mt-3 mb-3'>MONTHLY CONTRACT</p>
    </div>
    <div className='divider'></div>

    <div className='text-center'>
        <h2 className='text-xl font-bold mb-4'>Google My Business</h2>
        <p className='mt-7 mb-2'>Optimization</p>
        <p className='mt-3 mb-2'>Monthly Management</p>
        <p className='mt-3 mb-2'>2x Monthly Posts</p>
        <p className='mt-3 mb-2'>Google Review Assistance</p>
        <p className='mt-3 mb-2'>100 Local Citations (OneTime)</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold'>On Site</h2>
        <p className='mt-3 mb-2'>Full Website Audit</p>
        <p className='mt-3 mb-2'>Site Optimization</p>
        <p className='mt-3 mb-2'>Contetnt Strategy</p>
        <p className='mt-3 mb-2'>4x Monthly Blog Post</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold'>Off Site</h2>
        <p className='mt-3 mb-2'>5x Guest Post Links</p>
    </div>

    <div className='text-center'>
        <h2 className='text-xl font-bold'>Management</h2>
        <p className='mt-3 mb-2'>Monthly Video Report</p>
        <p className='mt-7 mb-2'>$500 ONE-TIME SETUP</p>
    </div>

    <div className='mt-5 mb-3 ml-1'>
    <button className="bg-stone-800 hover:bg-slate-800 text-white   w-56 h-12  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_3.showModal()}>Start Live Chat</button>
<dialog id="my_modal_3" className="modal">
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
          <div className='mt-6 text-center'>
      {/* if there is a button in form, it will close the modal */}
      <button className="w-16 h-10 bg-primary text-white hover:bg-gradient-to-br from-primary to-secondary  hover:text-white">Send</button>
    </div>
            </form>

            <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>

  </div>
        </div>

        </div>
    );
};

export default SEOPriceCard;
<p className='mt-3 mb-2'>Optimization</p>