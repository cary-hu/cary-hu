const devOpsTools = [
    {
        title: "Azure",
        color: "0078D7",
        icon: "azuredevops",
        href: "https://azure.microsoft.com/en-in/",
    },
    {
        title: "Cocker",
        color: "2496ED",
        icon: "docker",
        href: "https://www.docker.com/",
    },
    {
        title: "TeamCity",
        color: "000000",
        icon: "teamcity",
        href: "https://www.jetbrains.com/teamcity/",
    },
    {
        title: "Jenkins",
        color: "D24939",
        icon: "jenkins",
        href: "https://www.jenkins.io",
    },
    {
        title: "Linux",
        color: "FCC624",
        icon: "linux",
        href: "https://www.linux.org/",
    },
];
const frontEnd = [
    {
        title: "JavaScript",
        color: "F7DF1E",
        icon: "javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        title: "TypeScript",
        color: "3178C6",
        icon: "typescript",
        href: "https://www.typescriptlang.org/",
    },
    {
        title: "HTML5",
        color: "E34F26",
        icon: "html5",
        href: "https://www.w3.org/html/",
    },
    {
        title: "CSS3",
        color: "1572B6",
        icon: "css3",
        href: "https://www.w3schools.com/css/",
    },
    {
        title: "Less",
        color: "1D365D",
        icon: "less",
        href: "https://lesscss.org/",
    },
    {
        title: "VueJS",
        color: "4FC08D",
        icon: "vuedotjs",
        href: "https://vuejs.org/",
    },
    {
        title: "Bootstrap",
        color: "7952B3",
        icon: "bootstrap",
        href: "https://getbootstrap.com",
    },
    {
        title: "Babel",
        color: "F9DC3E",
        icon: "babel",
        href: "https://babeljs.io/",
    },
    {
        title: "WebPack",
        color: "8DD6F9",
        icon: "webpack",
        href: "https://webpack.js.org",
    },
];
const backEnd = [
    {
        title: ".NET",
        icon: "dotnet",
        color: "512BD4",
        href: "https://dotnet.microsoft.com/",
    },
    {
        title: "SQL Server",
        color: "CC2927",
        icon: "microsoftsqlserver",
        href: "https://www.microsoft.com/en-us/sql-server/",
    },
    {
        title: "NodeJS",
        color: "339933",
        icon: "nodedotjs",
        href: "https://nodejs.org",
    },
    {
        title: "Express",
        color: "000000",
        icon: "express",
        href: "https://expressjs.com",
    },
    {
        title: "MySQL",
        color: "4479A1",
        icon: "mysql",
        href: "https://www.mysql.com/",
    },
];
const others = [
    {
        title: "Git",
        color: "F05032",
        icon: "git",
        href: "https://git-scm.com/",
    },
    {
        title: "NGINX",
        color: "009639",
        icon: "nginx",
        href: "https://www.nginx.com",
    },
];

const renderSkills = () => {
    return `${getDevOpsToolsDom("DevOps Tools", devOpsTools)}
${getDevOpsToolsDom("FrontEnd Skills", frontEnd)}
${getDevOpsToolsDom("BackEnd Skills", backEnd)}
${getDevOpsToolsDom("Others", others)}
`
}

const getDevOpsToolsDom = (title, data) => {
    return `<p>
    <h3>${title}</h3>
    ${data.map(item => {
        return `<a href="${item.href}" target="_blank" rel="noreferrer">
        <img alt="${item.title}" src="https://img.shields.io/badge/-${item.title}-ffffff?style=flat-square&logo=${item.icon}&logoColor=${item.color}" />
      </a>`
    }).join("")}
</p>`
}

module.exports = renderSkills;
