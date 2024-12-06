"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        // insert order into DB
        const result = yield order_service_1.OrderService.createOrder(orderData, res);
        // send response
        res.status(200).json({
            message: "order created successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error._message || "An error occurred",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
const totalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // calculate into DB
        const fullRevenue = yield order_service_1.OrderService.totalRevenue();
        const [totalRevenue] = fullRevenue;
        // send response
        res.status(200).json({
            message: "Revenue calculated successfully",
            success: true,
            data: totalRevenue,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error._message || "An error occurred",
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
exports.OrderController = {
    createOrder,
    totalRevenue,
};
