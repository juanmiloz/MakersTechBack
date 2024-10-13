import { Express } from "express";
import {Request, Response} from 'express';
import authController from "../controllers/auth.controller";
import userController from "../controllers/user.controller";
import { auth } from "../middleware/auth";
import chatController from "../controllers/chat.controller";


const routes = (app: Express) => {

    //AUTH ROUTES
    app.post("/auth/register", authController.register);
    app.post("/auth/login", authController.login);

    //USER ROUTES
    app.get("/users", auth,userController.getAllUsers);
    
    //PRODUCT ROUTES
    
    
    //CHAT ROUTES
    app.get("/chat/product", auth, chatController.getProductinfo)

}

export default routes;