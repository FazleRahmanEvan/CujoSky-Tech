import React from 'react';
import BannerPrice from '../BannerPrice';
import PriceTitle from '../PriceTitle';
import PriceButton from '../PriceButton';
import './Content.css'

const Content = () => {
    return (
        <div>
             <BannerPrice/>
            <PriceTitle/>
            <PriceButton/>
               <div className='grid grid-cols-1 lg:grid-cols-3 lg:ml-32 lg:px-20 px-6 mt-20'>
        <div className=" w-80 uibronheight  bg-base-100 shadow-xl border-4 rounded-lg border-primary mt-28 mb-40">
<div className="text-center">
   
<button className="bg-gray-200 hover:bg-gray-500 hover:text-white w-48 h-8 mt-20 text-xl ml-4 text-center font-semibold rounded">BRONZE PLAN</button>
<p className='ml-6 mt-3'>Content Ranking Guarantee</p>
<div className='divider'></div>
<div>
    <h2 className='text-3xl font-bold text-center mr-8'>$275</h2>
    <p className='text-gray-500 text-xl font-semibold '>Total 25000 Words</p>
</div>
<div className='divider'></div>

<div className='text-center'>
    <h2 className='text-xl font-bold mb-4'>STARTUP</h2>
    <p className=' mb-2'>Per 1000/w = $15 / 1200 BDT</p>
    <p className='mt-3 mb-2'>Professional Writers</p>
    <p className='mt-3 mb-2'>Quick Proofread</p>
    <p className='mt-3 mb-2'>Standard Support</p>
    <p className='mt-3 mb-2'>Premium Grammarly Check</p>
    <p className='mt-3 mb-2'>Plagiarism Check</p>
    <p className='mt-3 mb-2'>Editorial Check</p>
    <p className='mt-3 mb-2'>30 Days</p>
</div>

<div className='mt-12 mb-8  ml-1'>
<button className="bg-stone-800 hover:bg-slate-800  w-56 h-12 text-white  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_2.showModal()}>Start Live Chat</button>
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

    <div className="w-80 contentlverheight rounded-lg bg-gradient-to-br from-secondary to-primary mt-4 shadow-xl border-4 border-black ">
<div className=" text-center mt-8">
<button className="bg-gray-100  hover:text-black w-52 h-10 mt-5 text-2xl ml-4 text-center font-semibold rounded">SILVER PLAN</button>
<p className='ml-3 text-white mt-4'>Content Ranking Guarantee.</p>
<div className='divider divider-white'></div>
<div className=''>
    <h2 className='text-5xl text-white font-bold text-center mr-8'>$550</h2>
    <p className='text-white text-xl font-semibold mt-3 mb-3'>Total 25000 Words</p>
</div>
<div className='divider'></div>

<div className='text-center'>
    <h2 className='text-white text-2xl  font-bold mb-4'>WINSTAR</h2>
    <p className='mb-2 text-white'>Per 1000/w = $22 / 1800 BDT</p>
    <p className='mt-3 mb-2 text-white'>Executive Writers</p>
    <p className='mt-3 mb-2 text-white'>Blog Purpose</p>
    <p className='mt-3 mb-2 text-white'>Expert Proofread</p>
    <p className='mt-3 mb-2 text-white'>Revision 03</p>
    <p className='mt-3 mb-2 text-white'>Top-Notce Support</p>
    <p className='mt-3 mb-2 text-white'>Premium Grammarly Check</p>
    <p className='mt-3 mb-2 text-white'>Plagiarism Check</p>
    <p className='mt-3 mb-2 text-white'>Editorial Check</p>
    <p className='mt-3 mb-2 text-white'>30 Days</p>
</div>

{/* Open the modal using ID.showModal() method */}
<div className='mt-12 mb-8  ml-1'>
<button className="bg-amber-200  hover:bg-amber-100  w-56 h-12  font-semibold text-xl rounded-md" onClick={()=>window.my_modal_1.showModal()}>Start Live Chat</button>
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
{/* <div className='mt-12 mb-8  ml-1'>
<button className='bg-amber-200  hover:bg-amber-100  w-56 h-12  font-semibold text-xl rounded-md'>Start Live Chat</button>
*/}

</div>
    </div>

    <div className="w-80 uigoldheight bg-base-100 shadow-xl border-4 rounded-lg border-primary mt-28 mb-40">
    <div className="text-center">
<button className="bg-gray-200 hover:bg-gray-500 hover:text-white w-48 h-8 mt-20 text-xl ml-4 text-center font-semibold rounded">BRONZE PLAN</button>
<p className='ml-6 mt-3'>Content Ranking Guarantee</p>
<div className='divider'></div>
<div>
    <h2 className='text-3xl font-bold text-center mr-8'>$700</h2>
    <p className='text-gray-500 text-xl font-semibold '>Total 25000 Words</p>
</div>
<div className='divider'></div>

<div className='text-center'>
    <h2 className='text-xl font-bold mb-4'>PREMIUM</h2>
    <p className=' mb-2'>Per 1000/w = $15 / 1200 BDT</p>
    <p className='mt-1 mb-2'>Professional Writers</p>
    <p className='mt-1 mb-2'>SEO Purpose</p>
    <p className='mt-1 mb-2'>Quick Proofread</p>
    <p className='mt-1 mb-2'>Revision 02</p>
    <p className='mt-1 mb-2'>Standard Support</p>
    <p className='mt-1 mb-2'>Premium Grammarly Check</p>
    <p className='mt-1 mb-2'>Plagiarism Check</p>
    <p className='mt-1 mb-2'>Editorial Check</p>
    <p className='mt-1 mb-2'>30 Days</p>
</div>

<div className='mt-6 mb-8  ml-1'>
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

export default Content;