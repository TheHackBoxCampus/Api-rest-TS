import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

/* services */
import { insertCar, getCars, getCar, updateCar, deleteCar} from "../services/item.service";

const getItem = async (req: Request, res: Response) => { 
  try {
    let { id } = req.params; 
    let responseItem = await getCar(id);
    res.send(responseItem)
  } catch (err:unknown) {
    res.status(500);
    handleHttp(res, "ERROR_GET_ITEM", err);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    let responseItems = await getCars();
    res.send(responseItems);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "ERROR_GET_ITEMS", err);
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    let responseInsert = await insertCar(req.body);
    res.send(responseInsert);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "ERROR_POST_ITEM", err);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    let responseItem = await updateCar(req.params.id, req.body); 
    res.send(responseItem)
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "ERROR_UPDATE_ITEM", err);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    let responseItem = await deleteCar(req.params.id); 
    res.send(responseItem)
  } catch (err:unknown) {
    res.status(500);
    handleHttp(res, "ERROR_DELETE_ITEM", err);
  }
};

export { getItem, postItem, getItems, updateItem, deleteItem };
