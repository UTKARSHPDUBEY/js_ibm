function showweatherDetails(event) {
    event.preventDefault();

    const lon = document.getElementById('lon').value;
    const lat = document.getElementById('lat').value;

    const apiKey = '70c921dfe5e73c8c5d53f0ffe7736d96';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');

            weatherInfo.innerHTML = `
                <h2>Weather Report</h2>
                <p>Location: ${data.name}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
  
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);