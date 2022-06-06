import { Movie } from "../../../commons/types/typing";
import RowUI from "./Row.presenter";

export interface Props {
  title: string;
  // when using firebase
  // movie: Movie ! DocumentData
  movies: Movie[];
}
const Row = ({ title, movies }: Props) => {
  return <RowUI title={title} movies={movies} />;
};

export default Row;
