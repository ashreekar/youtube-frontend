import { useRef, useState } from "react";
import { AiOutlineHistory } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Search({ needSearchbar, setQuery, query }) {
    const search_ref = useRef();
    const navigate = useNavigate();
    const recentSearches = useSelector(state => state.search.recentSearch);

    const [searchOn, setSearchOn] = useState(false);

    const handleQuery = (value) => setQuery(value);

    const handleRecentSearch = () => setSearchOn(true);

    const handleOutsideClick = (e) => {
        if (search_ref.current && search_ref.current.contains(e.target)) {
            return;
        }
        setSearchOn(false);
    };

    const handleSearch = (value) => {
        const encodedQuery = encodeURIComponent(value.trim());
        navigate(`/results?search_query=${encodedQuery}`);
    };

    return (
        <>
            <input
                type="text"
                value={query}
                onFocus={handleRecentSearch}
                onChange={(e) => handleQuery(e.target.value)}
                className={
                    needSearchbar
                        ? "w-full py-2 px-3 border border-gray-300 rounded-l-full outline-none focus:border-blue-500"
                        : "w-full hidden md:block py-2 px-4 border border-gray-300 rounded-l-full outline-none focus:border-blue-500"
                }
                placeholder="Search"
            />

            {searchOn && (
                <div
                    onClick={handleOutsideClick}
                    className="absolute inset-0 w-screen h-screen"
                >
                    <div
                        ref={search_ref}
                        className="absolute top-16 left-1/2 -translate-x-1/2 w-[36vw] max-h-[300px] bg-white rounded-xl shadow-2xl overflow-y-auto no-scrollbar z-50 py-2"
                    >
                        {recentSearches.length === 0 ? (
                            <p className="text-lg px-4 py-2">
                                No recent searches
                            </p>
                        ) : (
                            recentSearches.map((search, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between w-[95%] mx-auto py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                                >
                                    <button
                                        onClick={() => {
                                            setSearchOn(false)
                                            setQuery(search)
                                            handleSearch(search)
                                        }}
                                        className="flex items-center gap-3 font-semibold text-left flex-1"
                                    >
                                        <AiOutlineHistory className="text-2xl" />
                                        <span className="text-lg">{search}</span>
                                    </button>
                                    <button className="font-light">
                                        <FaTimes />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Search;