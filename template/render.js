const fs = require('fs');
const path = require('path');
const dayjs = require("dayjs");

const renderWeather = require("./weather");

const header = `<pre align="center" style="background-color: unset;">

     ,gggg,             ,ggg,  ,ggggggggggg,    ,ggg,         gg 
   ,88"""Y8b,          dP""8I dP"""88""""""Y8, dP""Y8a        88 
  d8"     \`Y8         dP   88 Yb,  88      \`8b Yb, \`88        88 
 d8'   8b  d8        dP    88  \`"  88      ,8P  \`"  88        88 
,8I    "Y88P'       ,8'    88      88aaaad8P"       88        88 
I8'                 d88888888      88""""Yb,        88        88 
d8            __   ,8"     88      88     "8b       88       ,88 
Y8,          dP"  ,8P      Y8      88      \`8i      Y8b,___,d888 
\`Yba,,_____, Yb,_,dP       \`8b,    88       Yb,      "Y88888P"88,
  \`"Y8888888  "Y8P"         \`Y8    88        Y8           ,ad8888
                                                         d8P" 88 
                                                       ,d8'   88 
                                                       d8'    88 
                                                       88     88 
                                                       Y8,_ _,88 
                                                        "Y888P"  

</pre>`;

const footer = `<p align="center">
<samp>
  <a href="https://cary.zhongting.icu">me</a> .
  <a href="https://docs.zhongting.icu">blog</a> .
  <a href="https://github.com/sponsors/cary-hu">sponsor</a>
</samp>
</p>`
const outputPath = path.join(__dirname, '../README.md');
const render = (weather) => {

  const content = `${header}
Hi there <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25" alt="手势">, 这篇README最后更新时间为: ${dayjs().format('YYYY年MM月DD日 HH时mm分')}

${renderWeather(weather)}

${footer}`
  fs.writeFileSync(outputPath, content);
}

module.exports = render;
