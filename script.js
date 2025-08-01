// ========== 1. DOG API ==========
async function fetchDogImage() {
    const card = document.getElementById('dog-api');
    card.innerHTML = "Loading 🐾...";
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      card.innerHTML = `
        <h3>🐶 Random Dog</h3>
        <img src="${data.message}" alt="Dog Image">
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load dog image!";
    }
  }
  
  // ========== 2. CAT API ==========
  async function fetchCatImage() {
    const card = document.getElementById('cat-api');
    card.innerHTML = "Loading 🐾...";
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      card.innerHTML = `
        <h3>🐱 Random Cat</h3>
        <img src="${data[0].url}" alt="Cat Image">
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load cat image!";
    }
  }
  
  // ========== 3. JOKE API ==========
  async function fetchJoke() {
    const card = document.getElementById('joke-api');
    card.innerHTML = "Loading 😂...";
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
      card.innerHTML = `
        <h3>😂 Joke</h3>
        <p>${data.joke}</p>
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load joke!";
    }
  }
  
  // ========== 4. GITHUB USER API ==========
  async function fetchGitHubUser() {
    const card = document.getElementById('github-api');
    card.innerHTML = "Loading 👨‍💻...";
    try {
      const response = await fetch('https://api.github.com/users/hrudhayg');
      const data = await response.json();
      card.innerHTML = `
        <h3>👨‍💻 GitHub User</h3>
        <img src="${data.avatar_url}" width="100"><br>
        <strong>${data.login}</strong>
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load GitHub user!";
    }
  }
  
  // ========== 5. WEATHER API ==========
  async function fetchWeather() {
    const card = document.getElementById('weather-api');
    card.innerHTML = "Loading 🌤️...";
    try {
      // Example: New York latitude/longitude
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true');
      const data = await response.json();
      card.innerHTML = `
        <h3>🌤️ New York Weather</h3>
        <p>${data.current_weather.temperature}°C</p>
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load weather!";
    }
  }
  
  // ========== 6. CURRENCY API ==========
  async function fetchCurrency() {
    const card = document.getElementById('currency-api');
    card.innerHTML = "Loading 💱...";
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await response.json();
      card.innerHTML = `
        <h3>💱 USD to EUR</h3>
        <p>1 USD = ${data.rates.EUR.toFixed(2)} EUR</p>
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load currency rate!";
    }
  }
  
  // ========== 7. MOVIES API ==========
  async function fetchMovies() {
    const card = document.getElementById('movies-api');
    card.innerHTML = "Loading 🎬...";
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      card.innerHTML = `
        <h3>🎬 First 3 Shows</h3>
        <ul>
          <li>${data[0].name}</li>
          <li>${data[1].name}</li>
          <li>${data[2].name}</li>
        </ul>
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load movies!";
    }
  }
  
  // ========== 8. PUBLIC API ==========
  async function fetchPublicAPI() {
    const card = document.getElementById('public-api');
    card.innerHTML = "Loading 📚...";
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const data = await response.json();
      const api = data.entries[0];
      card.innerHTML = `
        <h3>📚 Public API</h3>
        <p>${api.API} - ${api.Description}</p>
      `;
    } catch (error) {
      card.innerHTML = "⚠️ Failed to load public API!";
    }
  }
  
  // Call all functions on page load
  fetchDogImage();
  fetchCatImage();
  fetchJoke();
  fetchGitHubUser();
  fetchWeather();
  fetchCurrency();
  fetchMovies();
  fetchPublicAPI();
  