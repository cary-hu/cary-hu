const fs = require('fs');
const path = require('path');
const dayjs = require("dayjs");

const renderWeather = require("./weather");
const renderSkills = require('./skillIcon');

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
const outputPath = path.join(__dirname, '../README.md');
const render = (weather) => {

  const content = `${header}
Hi, I'm cary, A ordinary developer in GrapeCity Xi'an.

${renderWeather(weather)}

${renderSkills()}
<p>
  <h3>Leetcode</h3>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=cary-hu&" alt="cary-hu" />
</p>
------------
<p align="center">
<samp>
  <a href="https://cary.zhongting.icu">me</a> .
  <a href="https://docs.zhongting.icu">blog</a> .
  <a href="https://github.com/sponsors/cary-hu">sponsor</a>
</samp>
</p>
<p align="center">
<samp>
  Last Update in ${dayjs().format('YYYY-MM-DD HH:mm')}
</samp>
</p>`
  fs.writeFileSync(outputPath, content);
}

module.exports = render;
