const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', function (req, res) {

    const technologies = [
        { name: 'NodeJS', organization: "OpenJS Foundation", birth_year: 2009 },
        { name: 'Express', organization: "OpenJS Foundation", birth_year: 2010 },
        { name: 'Javascript', organization: "OpenJS Foundation", birth_year: 1995 }
    ];
    res.render('pages/index', {
        technologies: technologies
    });
});

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(3000);
console.log("Servidor rodando");