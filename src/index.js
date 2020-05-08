import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.send('Hello World');
});

app.post('/', async(req, res) => {
    const data = req.body;
    const result = data.A + data.B;
    res.send(`Result: ${result}`)
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});