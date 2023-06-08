import FormInput from "../../components/Common/FormInput";

export default function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex-col lg:max-w-[990px] xl:max-w-[1200px] mx-auto px-[10px]">
        {/* <div className=" pb-16 pt-24 lg:mb-0 md:basis-2/3 lg:basis-1/3"> */}
        <div className="">
          <div className="flex flex-wrap py-10">
            {/* Company Info */}
            <div className="lg:basis-5/12 float-left">
              <h1 className="text-gray-700 text-left">
                <span className="text-4xl font-medium text-left">
                  Get in touch
                </span>
              </h1>
              <div className="resize h-[38px]"></div>
              <p className="text-gray-700 text-sm leading-6 text-left pt-2 pb-5">
                We are available 24/7 by fax, e-mail or by phone. You can also
                use our quick contact form to ask a question about our services.
              </p>
              <ul className="text-[15px] text-gray-700 leading-7 text-left">
                <li className="flex items-center">
                  <i className="mr-4 fa-solid fa-location-dot"></i>
                  <p>
                    Địa chỉ: Lô số 28 KCN Quang Minh, TT. Quang Minh, H. Mê
                    Linh, TP. Hà Nội
                  </p>
                </li>
                <li className="flex items-center">
                  <i className="mr-4 fa-solid fa-phone"></i>
                  <a href="#">Điện thoại: 0246 684 6622</a>
                </li>
                <li className="flex items-center">
                  <i className="mr-4 fa-solid fa-envelope"></i>
                  <a href="#">Email: thuocthuycnc@gmail.com</a>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex text-left gap-[9px] items-center font-light leading-7 mt-[22px]">
                <a href="https://www.facebook.com/anivacc.cnc">
                  <i className="fa-brands fa-facebook-f text-indigo-800 hover:opacity-80"></i>
                </a>
                <a href="https://www.tiktok.com/@anivacc.cnc">
                  <i className="fa-brands fa-tiktok text-black hover:opacity-80"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-whatsapp text-green-500 hover:opacity-80"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-youtube text-red-700 hover:opacity-80"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin-in text-blue-700 hover:opacity-80"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram  text-pink-600 hover:opacity-80"></i>
                </a>
              </div>
            </div>

            {/* Space */}
            <div className="lg:basis-1/12" />

            {/* Contact form */}
            <div className="lg:basis-6/12 float-right w-full p-[10px]">
              <div className="lg:py-5 lg:px-[30px] shadow-[0_0_8px_0_rgba(0,0,0,0.2)] bg-white border">
                <h2 className="text-gray-800 text-3xl leading-12 font-bold text-left font-[Montserrat] mb-[10px]">
                  Contact us
                </h2>
                <form className="text-gray-700 leading-7 text-left">
                  <FormInput placeholder="Họ tên" />
                  <FormInput placeholder="*Email" />
                  <FormInput placeholder="*Điện thoại" />
                  <FormInput
                    style={{ height: "80px" }}
                    placeholder="*Nội dung"
                  />
                  <button className="items-start bg-blue-900 hover:bg-blue-800 hover:border-blue-800 text-white inline-block text-sm leading-5 text-center px-[30px] w-full h-10 mb-[10px]">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <a className="w-full h-full md:py-4 md:px-2 lg:py-0">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc3T-N8JVNDERwJ1OqbTYoJI&key=AIzaSyA81a5dr84kmpaCJLT3rvQ5hNi25Cy95BM"
            />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
