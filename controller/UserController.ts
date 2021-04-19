import { User } from '../model/User';
import {UserService} from "../service/UserService"

//Instantiate a new UserService
let userService:UserService = new UserService();


//Implement tryCatch
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

    async modifyUserName(email: string, name: string): Promise<User>{
        let user = await userService.modifyUserName(email, name);
        return user;
    }

    async deleteUser(email: string): Promise<void>{
        await userService.deleteUser(email);
    }

}



