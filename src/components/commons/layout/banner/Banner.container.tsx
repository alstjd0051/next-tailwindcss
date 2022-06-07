import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../../../commons/atoms/modalAtom";
import { Movie } from "../../../../commons/types/typing";
import BannerUI from "./Banner.presenter";

interface Props {
  topRated: Movie[];
}

const Banner = ({ topRated }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(topRated[Math.floor(Math.random() * topRated.length)]);
  }, [topRated]);

  return <BannerUI movie={movie} />;
};

export default Banner;
