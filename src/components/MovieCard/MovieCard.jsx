import { Card, Poster, Content, Title, Summary } from "./styles"
import { POSTER_URL } from "../../constants/constants"
export function MovieCard({ movie }) {
  const posterUrl = movie.poster_path && `${POSTER_URL}${movie.poster_path}`

  return (
    <Card>
      <Poster src={posterUrl} alt={movie.title} />
      <Content>
        <Title>{movie.title}</Title>
        <Summary>{movie.overview.slice(0, 100)}...</Summary>
      </Content>
    </Card>
  )
}
