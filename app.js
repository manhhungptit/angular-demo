import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import indexRouter, { indexPage } from './routes';

dotenv.config();

let app = express();

// Set app port
app.set('port', process.env.PORT || 8000);
// Set view engine
app.set('view engine', 'ejs');
const viewPath = path.join(__dirname, '/views');
console.log('view path', viewPath)
app.set('views', viewPath);
// Set public folder
app.use('/public', express.static(path.join(__dirname, '/public')));
// Allow CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);

// Redirect all unmatched route
app.use((req, res) => {
    res.locals.previousUrl = req.originalUrl;
    indexPage(res);
})

export default app;
