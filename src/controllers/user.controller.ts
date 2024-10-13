import { Request, Response } from "express";


class UserController {

    public async getAllUsers(req: Request, res: Response): Promise<Response> {
        try{
            return res.status(200).json({ message: "Get all users" });
        }catch(err){
            if(err instanceof Error){
                return res.status(500).json({ message: err.message });
            }else{
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    }

}

export default new UserController();