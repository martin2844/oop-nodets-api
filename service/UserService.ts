import { User } from '../model/User';
import {UserRepository} from '../repository/UserRepository';
import UserSchema from '../schema/UserSchema';

export class UserService implements UserRepository{

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
    
    async deleteUser(email: string): Promise<void> {
       await UserSchema.deleteOne({email: email});
    }

    async modifyUserName(email: string, name: string): Promise<User> {
        let user = await UserSchema.findOne({email: email});
        user.name = name;
        await user.save();
        return new User(user.name, user.email);
    }
}