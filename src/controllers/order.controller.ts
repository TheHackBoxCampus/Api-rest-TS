import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

/*services */
import { getOrders, postOrder, getOrder, updateOrder} from "../services/order.service"

const postOrderCtrl = async ({ body }: Request, res: Response) => {
  try {
    let responseItem = await postOrder(body);
    res.send(responseItem);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "ERROR_PORT_ORDER", err);
  }
};

const getOrdersCtrl = async (req: Request, res: Response) => { 
  try {
    let responseItem = await getOrders();
    res.send(responseItem);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "ERROR_GET_ORDERS", err);
  }
}

const getOrderCtrl = async ( { params }: Request, res: Response) => { 
  try {
    let { id } = params; 
    let responseItem = await getOrder(id);
    res.send(responseItem);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "ERROR_GET_ORDER", err);
  }
}

const updateOrderCtrl = async ({ params, body } : Request, res: Response) => { 
  try {
    let { id } = params 
    let responseItem = await updateOrder(id, body);
    res.send(responseItem);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "ERROR_UPDATE_ORDER", err);
  }
} 

export { postOrderCtrl, getOrdersCtrl, getOrderCtrl, updateOrderCtrl} 