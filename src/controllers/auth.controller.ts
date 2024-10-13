import { Request, Response } from "express";
import { User } from "../enitites/user.entity";
import bcrypt from "bcrypt";
import userService from "../services/user.service";

class AuthController {

    async login(req: Request, res: Response) {
        try {

            const { username, password } = req.body;

            const userSearched: User | null = await userService.findByUsername(username);
            if(!userSearched){
                return res.status(401).json({title: "  Error", message: "The username or password is incorrect. Please check your credentials and try again."});
            }

            const isMatch = await bcrypt.compare(password, userSearched.Password);
            if(!isMatch){
                return res.status(401).json({title: "Authentication Error", message: "The username or password is incorrect. Please check your credentials and try again."});
            }

            const token = await userService.generateUserToken(userSearched);

            return res.status(200).json({ 
                username: username,
                token: token
            });  

        } catch (err) {
            if(err instanceof Error){
                return res.status(500).json({ message: err.message });
            }else{
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    }

    public async register(req: Request, res: Response) {
        try {
            const rounds: string = process.env.SALT_ROUNDS!;
            const {username, email, password } = req.body

            const user = new User();
            user.Username = username;
            user.Email = email;
            user.Password = bcrypt.hashSync(password, parseInt(rounds));

            const userSearchedByUsername: User | null = await userService.findByUsername(username);
            const userSearchedByEmail: User | null = await userService.findByEmail(email);

            if(userSearchedByUsername){
                return res.status(400).json({ message: 'This username already exists' });
            }

            if(userSearchedByEmail){
                return res.status(400).json({ message: 'This email already exists' });
            }

            const userSaved = await userService.addUser(user);

            return res.status(200).json({ userSaved: userSaved }); 
        }catch(e) {
            if(e instanceof Error) {
                res.status(500).json({message: e.message});
            } else {
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    }

    async logout(req: Request, res: Response) {
        
    }

}

export default new AuthController();