export default function FaqBody({ question, answer }) {
  return (
    <div className="px-5 py-2.5 mb-2.5 border border-solid border-[#dddddd] font-poppins">
      <div className="flex font-bold">
        <span className="pr-[30px] text-[#003d79]">Q</span>
        <p className="text-[#333333]">{question}</p>
      </div>
      <div className="flex">
        <span className="pr-[30px] text-[#898989]">A</span>
        <div className="text-[#545454]">{answer}</div>
      </div>
    </div>
  );
}
