import express from 'express';

const app = express();

app.get('/', async (req, res) => {
    res.send('Hello World');
    console.log(req);
});

app.post('/', async (req, res) => {
    const data = req.body;
    console.log('data: ', data);
    res.send('good!');
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});