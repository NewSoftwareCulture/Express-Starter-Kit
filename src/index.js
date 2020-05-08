import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.send('Hello World');
});

app.post('/', async(req, res) => {
    const data = req.body;
    const result = data.A + data.B;
    const result_json = {
        'A': data.A,
        'B': data.B,
        'Result': result
    };
    console.log('Ok');
    res.json(result_json);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!\n ________________________\n|                        |\n| http://localhost:3000/ |\n|________________________|');
});