const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde el backend!');
});

app.listen(port, () => {
  console.log(`El servidor del backend está corriendo en http://localhost:${port}`);
});
