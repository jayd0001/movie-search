import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../../redux/thunk/searchMovies";


export function useMovieSearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { currentPage, totalPages, loading } = useSelector((state) => state.movies);

  const handleSearch = (page = 1) => {
    if (query.trim()) {
      dispatch(searchMovies({ query, page }));
    }
  };

  const handlePageChange = (page) => {
    handleSearch(page);
  };

  return {
    query,
    setQuery,
    currentPage,
    totalPages,
    loading,
    handleSearch,
    handlePageChange,
  };
}
