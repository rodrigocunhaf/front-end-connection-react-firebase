import React from "react";
import { MovieProvider } from "./components/Context/MoviesContext";
import { PageProvider } from "./components/Context/PageContext";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import { Main } from "./components/Layout/Main/Main";
import { MovieList } from "./components/MovieList/MovieList";

function App() {
  return (
    <PageProvider>
      <MovieProvider>
        <Header/>
        <Main/>
        <Footer/>
      </MovieProvider>
    </PageProvider>
  );
}

export default App;
