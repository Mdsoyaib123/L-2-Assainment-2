"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/products/product.route");
const order_route_1 = require("./app/modules/orders/order.route");
// use parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.json(" app is running ");
});
// application routes
app.use("/api/products", product_route_1.bookRoute);
app.use("/api/orders", order_route_1.orderRoute);
exports.default = app;
