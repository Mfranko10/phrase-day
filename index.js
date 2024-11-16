const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', async (req, res)=>{
    try {
        const response = await fetch('https://frasedeldia.azurewebsites.net/api/phrase');
        const data = await response.json();

        console.log(data.phrase);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});