const renderWeather = (weather) => {
  const rise = weather.rise;
  return `Today's sun will rise at ${rise.sunrise} and set at ${rise.sunset}. On a new day, do your best!`;
};

module.exports = renderWeather;
