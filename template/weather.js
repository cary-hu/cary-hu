const renderWeather = (weather) => {
  const observe = weather.observe;
  const alarm = weather.alarm;
  let weatherSR = `今日天气：${observe.weather_short} 最高气温 ${weather.forecast.max_degree}, 最低气温${weather.forecast.min_degree}° ${observe.weather_short}`;
  if (alarm) {
    weatherSR = `${weatherSR} ${alarm.province}发布${alarm.type_name}${alarm.level_name}预警。`
  }
  return weatherSR;
};

module.exports = renderWeather;
