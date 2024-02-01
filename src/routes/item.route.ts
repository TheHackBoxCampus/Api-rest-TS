import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item.controller";

/* middleware */
import { validateTokenMiddleware } from "../middlewares/validate.middleware";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validateTokenMiddleware, postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
