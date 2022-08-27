const renderWeather = (weather) => {
  const observe = weather.observe;
  const forecast = weather.forecast;
  const alarm = weather.alarm;
  const rise = weather.rise;
  let weatherSR = `### 今日天气：${observe.weather_short}

最高气温 ${forecast.max_degree}°, 最低气温${forecast.min_degree}°`;
  if (alarm) {
    weatherSR = `${weatherSR}

${alarm.province}发布${alarm.type_name}${alarm.level_name}预警`
  }
  weatherSR = `${weatherSR}

太阳将会在 ${rise.sunrise} 升起，${rise.sunset}落下，新的一天，也要好好加油！`
  return weatherSR;
};

module.exports = renderWeather;
