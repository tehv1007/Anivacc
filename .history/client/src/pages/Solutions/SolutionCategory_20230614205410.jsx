export default function SolutionCategory({ title, setTypeId, id }) {
  const handleId = () => {
    setTypeId(id);
  };
  return (
    <div
      onClick={handleId}
      className="bg-[#eee] max-w-[200px] text-center p-3 flex justify-center items-center cursor-pointer hover:bg-[#003d79] hover:text-white transition hover:transition active:bg-[#eee] active:text-black"
    >
      <p>{title}</p>
    </div>
  );
}
