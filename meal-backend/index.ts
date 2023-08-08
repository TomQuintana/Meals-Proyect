import express  from 'express';
import morgan from 'morgan';
import swaggerJsonDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';
import routesMeal from './src/routes/meals.routes';
import { options } from './src/docs/swaggerOptions';
import conectarDB from './src/config/db';

export const app = express();
app.use(express.json());

dotenv.config();
conectarDB();

const spect = swaggerJsonDoc(options);

app.use(morgan('dev'));

const whitelist = ['http://localhost:5173'];
const corsOptions = {
  origin: function (origin:any, callback:any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.use('/api/meal', routesMeal);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spect));

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000');
});
