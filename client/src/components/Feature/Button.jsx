export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick}type="submit" className="text-white bg-[#003d79] w-fit px-5 py-3 rounded-xl grow-0  transition hover:scale-110 hover:shadow-slate-400 hover:shadow-md active:scale-100">
      <i className="fa-solid fa-pen-to-square"></i> {children}
    </button>
  );
}
