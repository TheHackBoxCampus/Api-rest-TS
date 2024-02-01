import { Router } from "express";
import { postOrderCtrl, getOrdersCtrl, getOrderCtrl, updateOrderCtrl} from "../controllers/order.controller";

/* middleware */
import { validateTokenMiddleware } from "../middlewares/validate.middleware";

const router = Router();

router.get("/", validateTokenMiddleware, getOrdersCtrl);
router.get("/:id", validateTokenMiddleware, getOrderCtrl);
router.post("/", validateTokenMiddleware, postOrderCtrl);
router.put("/:id", validateTokenMiddleware, updateOrderCtrl);

export { router };
