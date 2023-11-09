import Express  from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import UploadData from "./uploadDB.js"
import router from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = Express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);
const port = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(port,()=>{
console.log(`Server is running on port ${port}`)
});

UploadData();