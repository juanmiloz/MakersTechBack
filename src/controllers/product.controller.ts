import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Product } from "../enitites/product.entity";

class ProductController {

    public async getAllProducts(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({ message: "Get All Products" });
        } catch (err) {
            if(err instanceof Error){
                return res.status(500).json({ message: err.message });
            }else{
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    }

}

export default ProductController;