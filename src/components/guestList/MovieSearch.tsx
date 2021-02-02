import { useState } from "react";
import Display from "./displayGuestList/Display";
import axios from "axios";

interface Options {
  method: string;
  url: string;
  params: { q: string };
  headers: {};
}

const MovieSearch: React.FC = () => {
  const [movieName, setMovieName] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMovieName(e.target.value);
  }
  const onSearch = () => {
    fetch("https://imdb8.p.rapidapi.com/title/find?q=game%20of%20thr", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1139ac9f01msh8559a5b1d075ba5p1b5decjsn98799d0c7a71",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h1>Movie Search</h1>
      <input onChange={onChange} value={movieName} />
      <button onClick={onSearch}>Search</button>
      <Display />
    </>
  );
};

export default MovieSearch;
