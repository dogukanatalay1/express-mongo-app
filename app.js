import express from 'express';
import dotenv from 'dotenv';
import todoRouter from './src/routers/todoRouters.js';

dotenv.config();

const app = express();

app.use(express.json())

app.use('/api', todoRouter);

app.get('/', (req, res) => res.send('Running!'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
