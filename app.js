import express from 'express';
import path from 'path';
import router from './routes/mainRoutes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/', router);
app.use('/Essaouira', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
