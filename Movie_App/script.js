// Fetch movie data from an API (for example, using fetch and TMDb API)
const API_KEY = '369527392bf2d3cd83551087ff454a38';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;

// Function to fetch and display movies
async function fetchMovies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const movies = data.results;
    const movieDisplay = document.getElementById('movieDisplay');

    movies.forEach((movie) => {
      // Create a movie card element
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      // Movie image
      const movieImage = document.createElement('img');
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieImage.alt = movie.title;
      movieCard.appendChild(movieImage);

      // Movie details
      const movieDetails = document.createElement('div');
      movieDetails.innerHTML = `<h2>${movie.title}</h2>
                                <p>Rating: ${movie.vote_average}</p>`;
      movieCard.appendChild(movieDetails);

      // Add the movie card to the display section
      movieDisplay.appendChild(movieCard);
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Call the fetchMovies function to display movies when the page loads
window.onload = fetchMovies;
