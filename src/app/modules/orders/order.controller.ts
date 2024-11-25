import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // insert order into DB
    const result = await OrderService.createOrder(orderData, res);
    // send response
    res.status(200).json({
      message: "order created successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error._message || "An error occurred",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};
const totalRevenue = async (req: Request, res: Response) => {
  try {
    // calculate into DB
    const fullRevenue = await OrderService.totalRevenue();
    const [totalRevenue] = fullRevenue;
    // send response
    res.status(200).json({
      message: "Revenue calculated successfully",
      success: true,
      data: totalRevenue,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error._message || "An error occurred",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const OrderController = {
  createOrder,
  totalRevenue,
};
