import React from "react";
import { Movie } from "../../types/typing";
import ThumbnailUI from "./Thumbnail.presenter";

export interface ThumbnialProps {
  // when using firebase
  // movie: Movie ! DocumentData
  movie: Movie;
}

const Thumbnail = ({ movie }: ThumbnialProps) => {
  return <ThumbnailUI movie={movie} />;
};

export default Thumbnail;
