import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import addOWASPheaders from './middleware/add-owasp.middleware.js';
import parseZoomContext from './middleware/zoom-context.middleware.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let appAbsolutePath = path.join(__dirname, '..', '..', 'cx-zoom', 'web');

const app = express();

/**
 *@MIDDLEWARE stack
 */
app.use(cors());
app.use(addOWASPheaders);
app.use(parseZoomContext);
app.use(express.static(appAbsolutePath));
app.use(express.json());
app.use(morgan('dev'));

export default app;
