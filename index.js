const getWeather = require("./apis/weather");
const render = require("./template/render");


const main = async () => {
  const [weather] = await Promise.all([getWeather()]);
  render(weather);
};

main().then();
