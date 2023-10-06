import User from './IUser';

export default interface Users{
    users: User[] | User | object ;
    loaded: boolean;
}