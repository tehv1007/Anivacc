import parse from "html-react-parser";

export default function ProductDesc({ long_desc }) {
  return (
    <div className="mt-10 border">
      <div className="w-full h-12 bg-[#545454] relative ">
        <div className="absolute top-1/2 left-0 translate-y-[-50%] bg-[#003d79] text-white text-2xl py-3 px-5">
          <p>Product Description</p>
        </div>
      </div>
      {/* <div className="px-4 py-8 flex flex-col gap-5">
        <div>
          <h3 className="text-[#2563eb] mb-2 text-2xl font-bold">
            【Generic name】
          </h3>
          <p className="text-xl">
            Newcastle Disease Virus (La Sota Strain) and Avian Influenza Virus
            (H9 subtype, SS strain) vaccine, Inactivated
          </p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">【Trade name】</h3>
          <p className="text-xl">Sinder ND + H9</p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">
            【Main Components and content】
          </h3>
          <p className="text-xl">
            Inactivated Newcastle Disease virus (La Sota strain) and Avian
            Influenza virus (H9N2). Active virus content of Newcastle Disease
            virus (La Sota Strain) ≥108.0EID50/0.1ml, and that of Avian
            Influenza virus ≥107.4EID50/0.2ml.
          </p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">
            【Usage and Dosage】
          </h3>
          <p className="text-xl">
            Chickens within 4 weeks 0.25ml per bird, inject subcutaneously;
            Chickens above 4 weeks, 0.5ml per bird, inject intramuscularly.
          </p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">
            【Adverse Effect】
          </h3>
          <p className="text-xl">
            There is no obvious adverse effect after vaccination, some chickens
            will eat less after vaccination for 1-2 days, there is a slight
            influence for laying rate, but it will recover in a few days.
          </p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">【Warning】</h3>
          <p className="text-xl">
            Avoid using the vaccine if the water is isolated from oil. Shake
            well before and during using.
          </p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">
            【Specification】
          </h3>
          <p className="text-xl">(1)250ml/bottle (2) 500ml/bottle.</p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">【Package】</h3>
          <p className="text-xl">(1)20 bottles/carton (2)40 bottles/carton</p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">【Storage】</h3>
          <p className="text-xl">
            Store vaccine at 2-8℃and the expiry period is 18 months.
          </p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">
            【Registered Number of Approval】
          </h3>
          <p className="text-xl">Veterinary Drug 010378081.</p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">
            【Manufacturer】
          </h3>
          <p className="text-xl">
            Beijing Sinder-vet Technology Co., Ltd. A subsidiary of Shandong
            Sinder Technology Co., Ltd.
          </p>
        </div>

        <div>
          <h3 className="text-[#2563eb]  mb-2 text-2xl font-bold">
            【Country of origin】
          </h3>
          <p className="text-xl">China.</p>
        </div>
      </div> */}
      <div className="py-6 px-8">{parse(long_desc)}</div>
    </div>
  );
}
