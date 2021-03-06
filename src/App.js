import React, { useState } from "react";
import "./App.css";
import MovieCard from "./Compenent/MovieCard/MovieCard";
import Filter from "./Compenent/Filter/Filter";
import Rating from "./Compenent/Rate";
import { Switch, Route } from "react-router-dom";
import Movielink from "./Compenent/MovieLink";

const moviesList = [
  {
    title: "Titanic",
    description:
      "Titanic was a British passenger liner operated by the White Star Line",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
    rate: 3,
    id: 1,
    url:"https://www.youtube.com/embed/kVrqfYjkTdQ",
  },
  {
    title: "I origins",
    description:
      "I Origins is a 2014 American science fiction romantic drama film written and directed by Mike Cahill",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKQTcXPQWBz0nw7AEDQhtGceLOvtCUaZGRMJDvM8si2CzlWIR",
    rate: 5,
    id: 2,
    url:"https://www.youtube.com/embed/Mk4briOLrTQ",
  },
];
function App() {
  const [movies, setMovies] = useState(moviesList);

  const [search, setSearch] = useState("");

  const [rate, setRate] = useState("");
  return (
    <div className="App back">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Filter setSearch={setSearch} />
              <Rating
                testRating={true}
                rate={rate}
                filterByRate={(rate) => setRate(rate)}
              />
              <MovieCard
                movies={movies}
                setMovies={setMovies}
                search={search}
                rate={rate}
              />
            </div>
          )}
        ></Route>
        <Route
          exact
          path="/MovieLink/:id"
           render={(props) => <Movielink  data={movies} {...props}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
