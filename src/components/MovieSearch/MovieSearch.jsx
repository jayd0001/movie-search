import { SearchContainer, SearchButton, SearchInput, Pagination, PageButton } from "./styles"
import { MovieList } from "../MovieList/MovieList"
import { useMovieSearch } from "./_hooks/useMovieSearch"

export function MovieSearch() {
  const { query, setQuery, currentPage, totalPages, loading, handleSearch, handlePageChange } = useMovieSearch()

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search for movies..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSearch()} />
      <SearchButton onClick={() => handleSearch()}>Search</SearchButton>
      <MovieList />
      {totalPages > 1 && (
        <Pagination>
          {[...Array(Math.min(5, totalPages))].map((_, index) => (
            <PageButton key={index} onClick={() => handlePageChange(index + 1)} isActive={currentPage === index + 1} disabled={loading}>
              {index + 1}
            </PageButton>
          ))}
          {totalPages > 5 && <span>...</span>}
          {totalPages > 5 && (
            <PageButton onClick={() => handlePageChange(totalPages)} isActive={currentPage === totalPages} disabled={loading}>
              {totalPages}
            </PageButton>
          )}
        </Pagination>
      )}
    </SearchContainer>
  )
}
