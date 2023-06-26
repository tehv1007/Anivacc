export default function PartnerItem({ imgUrl, index, href }) {
  return (
    <div className="relative basis-1/5 transition-all border-4 bg-white cursor-pointer">
      <a href={href} target="_blank">
        <img
          className="w-full h-full object-contain bg-top "
          key={index}
          src={imgUrl}
          alt={`partner-${index}`}
        />
      </a>
    </div>
  );
}
