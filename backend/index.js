import Express  from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import UploadData from "./uploadDB.js"

const app = Express();
dotenv.config();
const port = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(port,()=>{
console.log(`Server is running on port ${port}`)
});

UploadData();