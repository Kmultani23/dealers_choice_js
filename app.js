const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = 3000;

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
app.get('/Fellows/5', (req, res, next) => {
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
    <img class =Thompson src="https://ca.slack-edge.com/T024FPYBQ-UN10LGMLJ-8eb984757e4a-512" alt="Thompson"> <p>This is the best programmer on planet earth!</p>
    </body>
    </html>
    `);
});
app.get('/Fellows/3', (req, res, next) => {
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
    <img class =Nick src="https://ca.slack-edge.com/T024FPYBQ-U011MAJUFGF-416e7ebf386b-512" alt="Nick"> <p>This is the best programmer on planet earth!</p>
    </body>
    </html>
    `);
});
app.get('/Proffesors/:id', (req, res, next) => {
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
    <h2>Proffesors</h2>
    <img class = Prof src="https://ca.slack-edge.com/T024FPYBQ-U07DRD24A-g120f32133d9-512" alt="Prof"> <p>This is the best programmer on planet earth!</p>
    </body>
    </html>
    `);
});
app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

