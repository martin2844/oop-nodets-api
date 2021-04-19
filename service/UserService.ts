import { User } from '../model/User';
import {UserRepository} from '../repository/UserRepository';
import UserSchema from '../schema/UserSchema';

export class UserService implements UserRepository{

    constructor(){

    }

     async getUser(email: string): Promise<User> {
        let userData = await UserSchema.findOne({email: email});
        const user = new User(userData.name, userData.email);
        return user;
    }

    async createUser(email: string, name: String): Promise<User> {
        let newUser = new UserSchema({
            email: email,
            name: name
        });
        let save = await newUser.save();
        const user = new User(newUser.name, newUser.email);
        return user;
    }
  
}