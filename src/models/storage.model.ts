import { model, Schema } from "mongoose";
import { storage } from "../interfaces/storage.interface";

const storageSchema = new Schema<storage>(
  {
    fileName: {
      type: String,
    },
    owner: {
      type: String,
    },
    path: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const storageModel = model("storages", storageSchema);
export default storageModel;
