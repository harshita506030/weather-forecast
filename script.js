const API_KEY = `f2990367d683b69b02c51e76af2ca14a`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}
