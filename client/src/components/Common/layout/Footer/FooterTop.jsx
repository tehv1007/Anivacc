import React from 'react'

export default function FooterTop() {
  return (
    <div className="font-[Quicksand] pb-7 md:pb-9 md:flex">
    <div className="mb-7 md:mb-0 md:pr-[15px] md:basis-1/3">
      <img
        src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Logo/Florist%20logo.webp"
        alt="Logo"
      />
    </div>
    <p className="mb-7 text-base leading-7 font-normal md:mb-0 md:px-[15px] md:basis-2/3">
      The floristry business has a significant market in the corporate and
      social event world, as flowers
    </p>
    <div className="flex md:pl-[15px]  md:basis-1/3 text-[18px] text-[#111111] text-left">
      <a href="">
        <i className=" mr-5 fa-brands fa-facebook-f"></i>
      </a>
      <a href="">
        <i className=" mr-5 fa-brands fa-twitter"></i>
      </a>
      <a href="">
        <i className=" mr-5 fa-brands fa-instagram"></i>
      </a>
      <a href="">
        <i className=" mr-5 fa-brands fa-linkedin-in"></i>
      </a>
    </div>
  </div>
  )
}
