import { User } from "../model/User";

export interface UserRepository {
    getUser(email: string): Promise<User>;
    createUser(email: string, name: string): Promise<User>;
    deleteUser(email: string): Promise<void>;
    modifyUserName(email: string, name: string): Promise<User>;
}