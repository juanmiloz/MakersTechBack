import { AppDataSource } from "../config/db";
import { User } from "../enitites/user.entity";
import jwt from "jsonwebtoken";

class UserService {

    private usersRepository = AppDataSource.getRepository(User);

    public async getAllUsers(): Promise<User[] | null> {
        try {
            return this.usersRepository.find();
        }catch (error) {
            throw error;
        }
    }

    public async findByUsername(username: string): Promise<User | null> {
        try {
            return this.usersRepository.findOne({
                where: {
                    Username: username
                }
            })
        }catch (error) {
            throw error;
        }
    }

    public async findByEmail(email: string): Promise<User | null> {
        try {
            return this.usersRepository.findOne({
                where: {
                    Email: email
                }
            })
        }catch (error) {
            throw error;
        }
    }

    public async addUser(user: User): Promise<User | null> {
        try {
            return await this.usersRepository.save(user);
        }catch (error) {
            throw error;
        }
    }

    public async generateUserToken(user: User): Promise<string> {
        const token = await jwt.sign(
            {
              user_id: user.UserID,
              username: user.Username,
              email: user.Email
            },
            process.env.JWT_SECRET!,
            { expiresIn: "5m" }
          );
      
          return token;
    }
}

export default new UserService();