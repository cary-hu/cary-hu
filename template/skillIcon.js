const devOpsTools = [
    {
        title: "azure",
        href: "https://azure.microsoft.com/en-in/",
        src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    },
    {
        title: "docker",
        href: "https://www.docker.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    },
    {
        title: "jenkins",
        href: "https://www.jenkins.io",
        src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    },
    {
        title: "linux",
        href: "https://www.linux.org/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    },
];
const frontEnd = [
    {
        title: "babel",
        href: "https://babeljs.io/",
        src: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
    },
    {
        title: "bootstrap",
        href: "https://getbootstrap.com",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    {
        title: "css3",
        href: "https://www.w3schools.com/css/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
        title: "html5",
        href: "https://www.w3.org/html/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
        title: "javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
        title: "typescript",
        href: "https://www.typescriptlang.org/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
        title: "vuejs",
        href: "https://vuejs.org/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    },
];
const backEnd = [
    {
        title: "nodejs",
        href: "https://nodejs.org",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
        title: "mysql",
        href: "https://www.mysql.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
        title: "express",
        href: "https://expressjs.com",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
        title: "dotnet",
        href: "https://dotnet.microsoft.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
    },
];
const others = [
    {
        title: "git",
        href: "https://git-scm.com/",
        src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
        title: "nginx",
        href: "https://www.nginx.com",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
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
        <img src="${item.src}" alt="${item.title}" width="40" height="40" />
      </a>`
    })}
</p>`
}

module.exports = renderSkills;
