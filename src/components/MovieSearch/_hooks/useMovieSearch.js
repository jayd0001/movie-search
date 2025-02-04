import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../../redux/thunk/searchMovies";

export function useMovieSearch() {
  const [query, setQuery] = useState("");
  const [defaultQuery] = useState("spider");
  const [isDefault, setIsDefault] = useState(true);
  const dispatch = useDispatch();
  const { currentPage, totalPages, loading } = useSelector((state) => state.movies);

  useEffect(() => {

    dispatch(searchMovies({ query: defaultQuery, page: 1 }));
  }, [dispatch, defaultQuery]);

  const handleSearch = (page = 1) => {
    if (query.trim()) {
      setIsDefault(false);
      dispatch(searchMovies({ query, page }));
    }
  };

  const handlePageChange = (page) => {
    if (isDefault) {
      dispatch(searchMovies({ query: defaultQuery, page }));
    } else {
      handleSearch(page);
    }
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
