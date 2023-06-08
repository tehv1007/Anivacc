import React from "react";
import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";

export default function FooterOption() {
  return (
    <div className="pt-[50px] lg:pt-0 flex flex-col md:flex-row md:flex-wrap lg:flex-none border-b-solid border-y-[1px] border-[#eaeaea]">
      {/* Footer link */}
      <div className="grid grid-cols-1 md:basis-1/4 lg:basis-1/6 mb-[30px] lg:mb-0 md:pr-[15px] lg:py-[50px]">
        <FooterHeading
          headingText="Company"
          headingFontFamily={`font-[Libre Baskerville]`}
          headingColor={`text-[#111111]`}
          fontSize={`text-h4`}
        />
        <FooterLink linkItem={["About Us", "Service", "Contact Us"]} />
      </div>
      <div className="grid grid-cols-1  md:basis-1/4 lg:basis-1/6 mb-[30px] lg:mb-0 md:px-[15px] lg:py-12">
        <FooterHeading
          headingText="Account"
          headingFontFamily={`font-[Libre Baskerville]`}
          headingColor={`text-[#111111]`}
          fontSize={`text-h4`}
        />
        <FooterLink linkItem={["My cart", "Wisslist", "Log/Register"]} />
      </div>

      {/* Newletter */}
      <div className="mb-[30px] lg:mb-0 md:basis-2/4 lg:basis-1/3 md:pl-[15px] lg:pr-[15px] lg:border-solid lg:border-x-[1px]">
        <div className="lg:px-6 xl:px-16 lg:py-[50px] ">
          <FooterHeading
            headingText="Newletter"
            headingFontFamily={`font-[Libre Baskerville]`}
            headingColor={`text-[#111111]`}
            fontSize={`text-h4`}
          />
          <div className="font-[Quicksand]">
            <p className="text-base leading-7 font-normal mb-[15px]">
              Subcribe to our newsletter to get more free tips. No Spam,
              Promise.
            </p>
            <form
              className=" border-solid border-b-[2px] border-[#111111] px-[2px] py-[1px] relative w-full h-9"
              action=""
            >
              <input type="text" placeholder="Email" />
              <button className="px-[6px] py-[1px] absolute right-0 font-bold text-[#111111] uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div className="mb-[30px] lg:mb-0 md:basis-2/3 lg:basis-1/3 md:pr-[15px] lg:pl-[15px] ">
        <div className="lg:pl-5 xl:pl-[60px] lg:py-[50px]">
          <FooterHeading
            headingText="Get in touch"
            headingFontFamily={`font-[Libre Baskerville]`}
            headingColor={`text-[#111111]`}
            fontSize={`text-h4`}
          />
          <ul className="font-[Quicksand] text-[15px] leading-9">
            <li>69 North Cleveland Street, Memphis,USA.</li>
            <li>(123) 8111 9210 - (012) 1111 6868</li>
            <li>Florisr@supportthem.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
