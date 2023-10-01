import { products } from "./constants/data.js";
import Product from "./schema/product-schema.js";


const UploadData = async () => {
    try{
        await Product.insertMany(products);
        console.log('Data Imported');
    }catch(error){
        console.log('Error while importing data into DataBase',error.message);
    }
}

export default UploadData;