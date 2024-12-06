"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: {
            values: [
                "Fiction",
                "Science",
                "SelfDevelopment",
                "Poetry",
                "Religious",
            ],
            message: "{VALUE} is not right",
        },
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
    },
}, {
    timestamps: true,
});
// create a model
exports.ProductModel = (0, mongoose_1.model)("products", productsSchema);
