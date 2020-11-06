const html = require("html-template-tag");

module.exports = teacher => html 
`<html>
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

<img class = ${teacher.name} src= ${teacher.image} alt= ${teacher.name}> <div class = rating>
<p> RATING *****
</p> 
</div> 
<p> ${teacher.content}</p>

</body>
</html>
`

