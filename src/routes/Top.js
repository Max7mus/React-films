import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Film from '../components/Film';

class Top extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getTops = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getTops();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <main
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1524629802380-04f8ec63f471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304&q=80")`,
        }}
      >
        <div className="home">
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Загрузка ..</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Film
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default Top;

// function Top() {
//   return <span>Something</span>;
// }

// export default Top;
