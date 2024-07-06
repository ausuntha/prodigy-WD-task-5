document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your own API key from OpenWeatherMap

    const submitBtn = document.getElementById('submitBtn');
    const locationInput = document.getElementById('location');
    const weatherInfo = document.getElementById('weatherInfo');

    submitBtn.addEventListener('click', function() {
        const locationValue = locationInput.value.trim();
        if (locationValue === '') {
            alert('Please enter a location');
            return;
        }