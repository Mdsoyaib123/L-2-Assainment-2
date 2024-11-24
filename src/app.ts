import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import { bookRoute } from "./app/modules/books/book.route";

// use parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products',bookRoute);


export default app;
