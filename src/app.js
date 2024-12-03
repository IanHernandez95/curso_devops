const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Node.js!');
});

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener datos de la API externa');
        // Optional: Cancel the build if error persists for a while
      await setTimeout(async () => {
        console.error('API call failed for too long. Canceling build.');
        process.exit(1); // Exit with non-zero code to signal failure
      }, 5000); // Cancel after 5 seconds
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

module.exports = app;
