// Load Environment Variables
require('dotenv').config();

// Grab App Dependencies
const express = require('express');
//const expressLayout = require('express-ejs-layouts');

// Initialize App
const app = express();
const port = process.env.PORT || 5000;  // Add a fallback port if .env is missing
const router = express.Router();

// Static Middleware
app.use(express.static(__dirname + "/outdatedViews")); // Static files like CSS, JS, images
app.use(express.static("node_modules"));

// Set view engine
app.set('view engine', 'ejs');

// Router Middleware
app.get("/", (req, res) => {
    res.render("index");  // EJS view files should be in the 'views' folder
});
app.get("/index.ejs", (req, res) => {
    res.render("index");  // EJS view files should be in the 'views' folder
});
app.get("/contact.ejs", (req, res) => {
    res.render("contact");  // EJS view files should be in the 'views' folder
});
app.get("/post.ejs", (req, res) => {
    res.render("post");  // EJS view files should be in the 'views' folder
});
app.get("/about.ejs", (req, res) => {
    res.render("about");  // EJS view files should be in the 'views' folder
});
// Running Application Server
app.listen(port, () => console.log(`Server Running on localhost:${port}`));
