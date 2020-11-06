const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = 3000;
const teachers = require('./fullstack');
const teacherList = require('./teachersList');
const teachersList = require('./teachersList');
app.use((morgan)('dev'));
app.use(express.static('assets'))

app.get('/', (req, res, next) => {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <div class = 'navbar'>
    <nav>
    <a href='/'>Home</a>
    <a href='/Fellows'>Fellows</a>
    <a href='/Proffesors'> Proffesors </a> 
    </nav>
    </div>
    <h1> FULL<span style='color:red'>STACK</span></h1>
    </body>
    </html>
    `);
});
app.get('/Proffesors', (req,res, next)=> {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <div class = 'navbar'>
    <nav>
    <a href='/'>Home</a>
    <a href='/Fellows'>Fellows</a>
    <a href='/Proffesors'> Proffesors </a>
    </nav>
    </div>
    <h1> FULL<span style='color:red'>STACK</span></h1>
    <h3> Proffesors</h3>
    <ul>
    <li><a href='/Proffesors/1'>Prof</a></li>
    </ul>
    </body>
    </html>
    `);
})
app.get('/Fellows', (req, res, next) => {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <div class = 'navbar'>
    <nav>
    <a href='/'>Home</a>
    <a href='/Fellows'>Fellows</a>
    <a href='/Proffesors'> Proffesors </a>
    </nav>
    </div>
    <h1> FULL<span style='color:red'>STACK</span></h1>
    <h2>Fellows</h2>
    
    <ul>
    <li><a href='/Fellows/3'>Nick</a></li>
    <li><a href='/Fellows/5'>Thompson</a></li>
    </ul>
    </body>
    </html>
    `);
});
app.get('/Fellows/:id', (req, res, next) => {
    
    const fellow = teachers.find(req.params.id);
    
    res.send(teacherList(fellow))

});
app.get('/Fellows/:id', (req, res, next) => {
    const fellow = teachers.find(req.params.id);
    res.send( teacherList(fellow)
    );

});
app.get('/Proffesors/:id', (req, res, next) => {
   const Proffesors = teachers.find(req.params.id)
       res.send(teachersList(Proffesors));
   
});
app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

