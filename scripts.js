require('dotenv').config()

function dataOnTheScreen(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-forecast").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade relativa do ar " + data.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}


async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.KEY}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    dataOnTheScreen(data)
}

function clickedButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}