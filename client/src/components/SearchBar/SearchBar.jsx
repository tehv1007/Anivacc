import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SearchBar({ setSidebarOpen }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSidebarOpen(false);
    navigate(`/search?query=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="border-white border-[2px] flex justify-between my-3">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          className="p-3 bg-transparent flex-grow focus:outline-none"
          placeholder={t("search_placeholder")}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass text-white p-3"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
