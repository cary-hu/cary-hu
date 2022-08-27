const renderWeather = (weather) => {
  const rise = weather.rise;
  return `Today's sun will rise at ${rise.sunrise} and set at ${rise.sunset}. On a new day, Do your best!`;
};

module.exports = renderWeather;
