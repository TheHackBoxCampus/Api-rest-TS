import orderModel from "../models/orders.model";
import { Order } from "../interfaces/order.interface";

const getOrders = async () => { 
    let responseOrders = await orderModel.find({}); 
    return responseOrders
}

const getOrder = async (id:string) => { 
    let responseOrder = await orderModel.findOne({ _id: id});
    return responseOrder;
}

const postOrder = async (data:Order) => { 
    let responseOrder = await orderModel.create(data); 
    return responseOrder
}

const updateOrder = async (id:string, data:Order) => { 
  const responseItem = await orderModel.findOneAndUpdate({ _id: id }, data, { new: true });
  return responseItem; 
}

export { getOrders, postOrder, getOrder, updateOrder }