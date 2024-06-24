// const express = require('express');
// const app = express();
// const path = require('path');
// // const port= 8000;
// const port = process.env.PORT || 8000;


// // public static path

// const static_path = path.join(__dirname,"../public");
// app.set('view engine','hbs');
// app.use(express.static(static_path));





// // routing
// app.get("",(req,res)=>{
//     res.render('index.hbs');
// })

// app.render("/about",(req,res)=>{
//     res.render('about.hbs');
// })

// app.get("/weather",(req,res)=>{
//     res.render('weather.hbs');
// })

// app.get("*",(req,res)=>{
//     res.render('404err.hbs');
// })
// app.listen(port,()=>{
//     console.log(`listening to the port at ${port} `)
// })
const express = require('express');
const app = express();
const hbs =require('hbs');
const path = require('path');
const port = process.env.PORT || 8000;

// Define path for static files
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views',template_path);

hbs.registerPartials(partials_path);
app.use(express.static(static_path));

// Routing
app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

// 404 Error handler
app.get("*", (req, res) => {
    res.render('404err');
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
