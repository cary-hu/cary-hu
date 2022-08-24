const weatherRequestConfig = {
    type: ["observe", "alarm", "forecast_24h"],
    source: "pc",
    province: "陕西省",
    city: "西安市"
}

const requestUrl = `https://wis.qq.com/weather/common?source=${weatherRequestConfig.source}&weather_type=${encodeURIComponent(weatherRequestConfig.type.join("|"))}&province=${encodeURIComponent(weatherRequestConfig.province)}&city=${encodeURIComponent(weatherRequestConfig.city)}`;

const axios = require("axios").default;

const getWeather = async () => {
    console.log(requestUrl)
    const res = await axios({
        method: "get",
        url: requestUrl
    });
    const weatherData = res.data.data;
    const alarm = weatherData.alarm[0];
    const observe = weatherData.observe;
    const forecast = weatherData.forecast_24h[1];
    return { alarm, observe, forecast };
}

module.exports = getWeather;
