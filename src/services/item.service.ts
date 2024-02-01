import itemModel from "../models/item.model";
import { Car } from "../interfaces/car.interface";

const insertCar = async (item: Car) => {
  const responseInsert = await itemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItems = await itemModel.find({});
  return responseItems;
};

const getCar = async (id: string) => {
  const responseItem = await itemModel.findOne({ _id: id });
  return responseItem;
};

const updateCar = async (id: string, data: Car) => {
  const responseItem = await itemModel.findOneAndUpdate({ _id: id }, data, { new: true });
  return responseItem; 
};

const deleteCar = async (id: string) => { 
  const responseItem = await itemModel.deleteOne({_id: id}); 
  return responseItem; 
}

export { insertCar, getCars, getCar, updateCar, deleteCar };
