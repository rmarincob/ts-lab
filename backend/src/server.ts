import cors from "cors"
import "dotenv/config"
import express, { Express, NextFunction, Request, Response } from "express"
import userRoutes from "./routes/users"
import CustomError from "./utils/error"
import os from 'os'

const app: Express = express()

const { PORT } = process.env

/* cors */
app.use(cors())

/* config middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* routing */
app.use('/api', userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.status(res.statusCode).send({ code: res.statusCode, message: `MS LAB - CIBERSEGURIDAD (${os.hostname()} - ${PORT})` });
});


/* handle error */
app.use((req: Request, res: Response, next: NextFunction) => {
    var err = new CustomError(`Resource not found`, 404);
    next(err);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).send({
        code: err.status,
        message: err.message,
    });
});

export default app;