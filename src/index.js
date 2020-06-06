import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import bodyParser from 'body-parser';
import { Logger } from './utils'
import routes from './routes';

const uri = 'mongodb://localhost:27017/express_starter_kit';
const port = process.env.PORT || 3000;

mongoose.Promise = Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => { Logger.db('Connected!') })
    .catch(e => { Logger.ERROR(e) })

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(routes.example);

app.get('/', async (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    Logger(`Example app listening on port ${port}!\n ________________________\n|                        |\n| http://localhost:${port}/ |\n|________________________|\n`);
});