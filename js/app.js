//Do not show api key on your JS file like this
const API_KEY = `cfb1385af818e7c278197ef1c09b58ab`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setWeatherText('temperature', data.main.temp);
    setWeatherText('condition', data.weather[0].main);
}

const setWeatherText = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    searchField.value = '';
    //set city
    document.getElementById('city').innerText = city;

    loadTemperature(city);
})

loadTemperature('dhaka')