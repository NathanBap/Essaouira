import express from 'express';
import path from 'path';
import router from './routes/mainRoutes.js';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express();

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(helmet());
app.disable('x-powered-by')

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
