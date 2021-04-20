import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Components/MovieCard";
import { v4 as uuidv4 } from "uuid";
import StarRatingComponent from "react-star-rating-component";
import { Card, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Button } from "bootstrap";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      posterURL: "/icarealot.jpg",
      title: "I Care a Lot",
      description:
        " A crooked legal guardian who drains the savings of her elderly wards meets her match when a woman she tries to swindle turns out to be more than she first appears",
      Rate: 4,
    },
    {
      id: uuidv4(),
      posterURL: "/badboys.jpg",
      title: "BAD BOYS FOR LIFE",
      description:
        "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
      Rate: 5,
    },

    {
      id: uuidv4(),
      posterURL: "/batman.jpg",
      title: "The Dark Knight Rises",
      description:
        "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      Rate: 4,
    },
    {
      id: uuidv4(),
      posterURL: "/badtrip.jpg",
      title: "Very Bad Trip 3",
      description:
        "Very Bad Trip 3 (The Hangover Part III), ou Lendemain de veille 3 au Québec et au Nouveau-Brunswick, est un film américain de Todd Phillips sorti en 2013. C'est le dernier volet de la série Very Bad Trip.",
      Rate: 5.5,
    },
  ]);

  const [movieSearch, setMovieSearch] = useState("");
  const [rateSearch, setRatingSearch] = useState("");

  function add(newMovie) {
    setMovies([...movies, newMovie]);
  }

  // function search(movieSearch) {
  //   setMovies([...movies, movieSearch]);
  // }
  return (
    <div className="App">
      <Filter
        setMovieSearch={setMovieSearch}
        rateSearch={rateSearch}
        setRatingSearch={setRatingSearch}
      />
      <AddMovie addMovie={add}></AddMovie>
      <MovieList
        movies={movies.filter((movie) =>
          movie.title
            .toLocaleLowerCase()
            .trim()
            .includes(movieSearch.toLocaleLowerCase().trim())
           
        )}
       
       
      ></MovieList>
  
    </div>
  );
}
export default App;
