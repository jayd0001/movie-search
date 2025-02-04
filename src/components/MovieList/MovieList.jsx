import { ListContainer, LoadingSpinner } from "./styles"
import { useSelector } from "react-redux"
import { MovieCard } from "../MovieCard/MovieCard"

export function MovieList() {
  const { movies, loading, error } = useSelector((state) => state.movies)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <ListContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ListContainer>
  )
}
