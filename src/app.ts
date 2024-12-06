import express, { Application, Response,Request } from "express";
const app: Application = express();
import cors from "cors";
import { bookRoute } from "./app/modules/products/product.route";
import { orderRoute } from "./app/modules/orders/order.route";

// use parser
app.use(express.json());
app.use(cors());

app.get("/", (req:Request, res:Response) => {
  res.json(
    " app is running "
  )
});

// application routes
app.use("/api/products", bookRoute);
app.use("/api/orders", orderRoute);

export default app;
