import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'; 
import { JwtInfoInterface } from "../interfaces/jwt.interface";


export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const secret: string =  process.env.JWT_SECRET!; 
        let token = req.headers.authorization;
        if(!token){
            console.log("No token");
            return res.status(401).json({ message: "Unauthorized" });
        }

        token = token.replace('Bearer ', '');
        const decoded: JwtInfoInterface = await jwt.verify(token,secret) as JwtInfoInterface;

        req.body.loggedUser = decoded;
        next();
    }catch (err){
        if( err instanceof Error){
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}