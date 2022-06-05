import React, { useEffect, useState } from "react";
import { Movie } from "../../types/typing";
import BannerUI from "./Banner.presenter";

interface Props {
  topRated: Movie[];
}

const Banner = ({ topRated }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(topRated[Math.floor(Math.random() * topRated.length)]);
  }, [topRated]);
  console.log(movie);

  return <BannerUI movie={movie} />;
};

export default Banner;
