const getBerlinWeather = async () => {
  const url = `/.netlify/functions/fetch-weather?lat=52.520008&lon=13.404954`
  const weatherRequest = await fetch(url)
  const berlinWeather = await weatherRequest.json()
  return berlinWeather
}

const displayWeather = (weather) => {
  const h1span = document.querySelector('h1 span')
  h1span.textContent = `${Math.round(weather.main.temp)} °C`
  h1span.setAttribute('aria-busy', 'false')

  const iconTag = document.querySelector('.weather-icon')
  iconTag.setAttribute('src', `icons/${weather.weather[0].icon}.png`)
  iconTag.setAttribute('style', 'opacity: 1')
}

const refreshWeather = async () => {
  const weather = await getBerlinWeather()
  displayWeather(weather)
}

refreshWeather()
