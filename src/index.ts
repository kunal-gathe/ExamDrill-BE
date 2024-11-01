import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
