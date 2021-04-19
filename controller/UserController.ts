import { User } from '../model/User';
import {UserService} from "../service/UserService"

//Instantiate a new UserService
let userService:UserService = new UserService();

export class UserController{
    async getUser(email: string): Promise<User>{
        let user = await userService.getUser(email);
        return user;
    }

    async createUser(email: string, name: string): Promise<User>{
        try {
            let user = await userService.createUser(email, name);
            return user;
        } catch (error) {
            console.log(error);
            return error;
        }
       
    }
}



