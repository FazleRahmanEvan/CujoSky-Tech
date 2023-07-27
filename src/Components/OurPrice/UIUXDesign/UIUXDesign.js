import React from 'react';
import './UIUXDesign.css'
import BannerPrice from '../BannerPrice';
import PriceTitle from '../PriceTitle';
import PriceButton from '../PriceButton';

const UIUXDesign = () => {
    return (
        <div>
            <BannerPrice/>
            <PriceTitle/>
            <PriceButton/>

           <div className='grid grid-cols-1 lg:grid-cols-3 lg:ml-32 lg:px-20 px-6'>
        <div className=" w-80 uibronheight  bg-base-100 shadow-xl border-4 rounded-lg border-primary mt-28 mb-40">
<div className="text-center">
   
<button className="bg-gray-200 hover:bg-gray-500 hover:text-white w-48 h-8 mt-20 text-xl ml-4 text-center font-semibold rounded">BRONZE PLAN</button>
<p className='ml-6 mt-3'>For a small size product.</p>
<div className='divider'></div>
<div>
    <h2 className='text-3xl font-bold text-center mr-8'>$175</h2>
    <p className='text-gray-500 text-xl font-semibold '>ONE-TIME CONTRACT</p>
</div>
<div className='divider'></div>

<div className='text-center'>
    <h2 className='text-xl font-bold mb-4'>STARTUP</h2>
    <p className=' mb-2'>5 pages Design</p>
    <p className='mt-3 mb-2'>Up to 50 Section</p>
    <p className='mt-3 mb-2'>Free 100+ illustration</p>
    <p className='mt-3 mb-2'>Responsive Design</p>
    <p className='mt-3 mb-2'>Commercial Use</p>
    <p className='mt-3 mb-2'>Source file</p>
    <p className='mt-3 mb-2'>Unlimited Revisions</p>
    <p className='mt-3 mb-2'>Within 5 Days Delivery</p>
</div>

<div className='mt-10 ml-1'>
<button className="bg-stone-800 hover:bg-slate-800 text-white w-56 h-12  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_1.showModal()}>Start Live Chat</button>
<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
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
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="w-16 h-10 bg-primary text-white hover:bg-gradient-to-br from-primary to-secondary  hover:text-white">Send</button>
    </div>
  </form>
</dialog>
</div>

</div>
    </div>

    <div className="w-80 uisilverheight rounded-lg bg-gradient-to-br from-secondary to-primary mt-8 shadow-xl border-4 border-black ">
<div className=" text-center mt-8">
<button className="bg-gray-100  hover:text-black w-52 h-10 mt-12 text-2xl ml-4 text-center font-semibold rounded">SILVER PLAN</button>
<p className='ml-3 text-white mt-4'>For a middle size product..</p>
<div className='divider divider-white'></div>
<div className=''>
    <h2 className='text-5xl text-white font-bold text-center mr-8'>$550</h2>
    <p className='text-white text-xl font-semibold mt-3 mb-3'>ONE-TIME CONTRACT</p>
</div>
<div className='divider'></div>

<div className='text-center'>
    <h2 className='text-white text-2xl  font-bold mb-4'>WINSTAR</h2>
    <p className='mb-2 text-white'>10 pages Design</p>
    <p className='mt-3 mb-2 text-white'>Up to 100 Section</p>
    <p className='mt-3 mb-2 text-white'>Free 150+ illustration</p>
    <p className='mt-3 mb-2 text-white'>Responsive Design</p>
    <p className='mt-3 mb-2 text-white'>Commercial Use</p>
    <p className='mt-3 mb-2 text-white'>Source file</p>
    <p className='mt-3 mb-2 text-white'>Unlimited Revisions</p>
    <p className='mt-3 mb-2 text-white'>Within 9 Days Delivery</p>
</div>


<div className='mt-12 mb-8  ml-1'>
<button className="bg-amber-200  hover:bg-amber-100  w-56 h-12 text-black  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_2.showModal()}>Start Live Chat</button>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
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
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="w-16 h-10 bg-primary text-white hover:bg-gradient-to-br from-primary to-secondary  hover:text-white">Send</button>
    </div>
  </form>
</dialog>
</div>

</div>
    </div>

    <div className="w-80 uigoldheight bg-base-100 shadow-xl border-4 rounded-lg border-primary mt-28 mb-40">
    <div className="text-center">
<button className="bg-gray-200 hover:bg-gray-500 hover:text-white w-48 h-8 mt-20 text-xl ml-4 text-center font-semibold rounded">GOLD PLAN</button>
<p className='ml-6 mt-3'>For a complicated products</p>
<div className='divider'></div>
<div>
    <h2 className='text-3xl font-bold text-center mr-8'>$1350</h2>
    <p className='text-gray-500 text-xl font-semibold '>ONE-TIME CONTRACT</p>
</div>
<div className='divider'></div>

<div className='text-center'>
    <h2 className='text-xl font-bold mb-4'>PREMIUM</h2>
    <p className=' mb-2'>20 pages Design</p>
    <p className='mt-3 mb-2'>Up to 200 Section</p>
    <p className='mt-3 mb-2'>Free 300+ illustration</p>
    <p className='mt-3 mb-2'>Responsive Design</p>
    <p className='mt-3 mb-2'>Commercial Use</p>
    <p className='mt-3 mb-2'>Source file</p>
    <p className='mt-3 mb-2'>Unlimited Revisions</p>
    <p className='mt-3 mb-2'>Within 15 Days Delivery</p>
</div>

<div className='mt-10 ml-1'>
<button className="bg-stone-800 hover:bg-slate-800 text-white   w-56 h-12  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_3.showModal()}>Start Live Chat</button>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
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
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="w-16 h-10 bg-primary text-white hover:bg-gradient-to-br from-primary to-secondary  hover:text-white">Send</button>
    </div>
  </form>
</dialog>
</div>

</div>
    </div>

    </div>
        </div>
     
    );
};

export default UIUXDesign;