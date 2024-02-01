import "dotenv/config";
import express from "express"; 
import cors from "cors"; 
import { router } from "./routes";
import db from "./config/mongo"

const PORT = process.env.PORT || 3001; 
const app = express(); 

/* middlewares */
app.use(cors()); 
app.use(express.json())

/*routers */
app.use(router)

/* db connect */
db()

// listen port
app.listen(PORT, () => console.log("[ server ] listening " + PORT));  