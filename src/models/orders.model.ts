import { model, Schema } from "mongoose";
import { Order } from "../interfaces/order.interface";

const ordersSchema = new Schema<Order>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const orderModel = model("orders", ordersSchema); 
export default orderModel;
