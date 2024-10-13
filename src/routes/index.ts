import { Express } from "express";
import {Request, Response} from 'express';
import authController from "../controllers/auth.controller";
import userController from "../controllers/user.controller";
import { auth } from "../middleware/auth";
import chatController from "../controllers/chat.controller";
import ProductController from "../controllers/product.controller";
import productController from "../controllers/product.controller";


const routes = (app: Express) => {

    //AUTH ROUTES
    app.post("/auth/register", authController.register);
    app.post("/auth/login", authController.login);

    //USER ROUTES
    app.get("/users", auth,userController.getAllUsers);
    
    //PRODUCT ROUTES
    app.get("/products", auth, productController.getAllProducts);
    
    //CHAT ROUTES
    app.post("/chat/product", auth, chatController.getProductinfo)
    app.get("/chat/recomended/:userId", auth, chatController.getRecomendedProducts)

}

export default routes;