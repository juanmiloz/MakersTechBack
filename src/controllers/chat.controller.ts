import { json, Request, Response } from "express";
import productService from "../services/product.service";
import chatService from "../services/chat.service";
import preferenceService from "../services/preference.service";

class ChatController {

    public async getProductinfo(req: Request, res: Response): Promise<Response> {
        try {
            const query = req.body.query;
            const productInfo = await productService.getAllProducts();
            const response = await chatService.getProductInfo(JSON.stringify(productInfo), query);
            return res.status(200).json({ message: response });
        } catch (err) {
            if(err instanceof Error){
                return res.status(500).json({ message: err.message });
            }else{
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    }

    public async getRecomendedProducts(req: Request, res: Response): Promise<Response> {
        try {
            const userId = parseInt(req.params.userId);

            const productInfo = await productService.getAllProducts();
            const clientPreferences = await preferenceService.getUserPreferences(userId);

            const response = await chatService.getRecomendedProducts(JSON.stringify(productInfo), JSON.stringify(clientPreferences));
            
            const matchResult = response.match(/\[.*\]/);
            if (!matchResult) {
                throw new Error("Invalid JSON data");
            }
    
            const output = JSON.parse(matchResult[0]);

            return res.status(200).json(output);
        } catch (err) {
            if(err instanceof Error){
                return res.status(500).json({ message: err.message });
            }else{
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    }  
}

export default new ChatController();