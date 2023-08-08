const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact-us', (req, res) => {
  res.sendFile(__dirname + '/contact-us.html');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
