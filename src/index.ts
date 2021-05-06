import express from 'express';
import 'reflect-metadata';
import './database';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3333;

app.listen(PORT,() => console.log(`Server listening in ${PORT}`));