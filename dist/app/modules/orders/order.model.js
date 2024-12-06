"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const ordersSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    product: {
        type: String,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0,
    },
}, {
    timestamps: true,
});
exports.OrderModel = (0, mongoose_1.model)("orders", ordersSchema);
