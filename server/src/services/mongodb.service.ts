import { injectable } from 'inversify';
import { Collection, MongoClient } from 'mongodb';
import { User } from '../interfaces';

const url = 'mongodb://localhost:27017';

@injectable()
/*
* Cette classe s'occupe des communications avec MongoDB
*/
export class MongodbService {

    private _client: MongoClient = new MongoClient(url);
    private _collection: Collection<User>;
    
    constructor(){
        //Pourrait causer des problèmes en production
        this._client.connect((err) => {
            if(err){
                console.log(err);
            }
            console.log('connecter a la BD');
        });
        //Collection à utiliser
        this._collection = this._client.db('tp2').collection<User>('users');
    }
    
    //Retourne les informations d'un utilisateur à partir de son username
    async getUserByUsername(username: string):Promise<User | null>{
        //TODO Trouver l'utilisateur en fonction de son nom d'utilisateur
        const user = await this._collection.findOne({username:username})

        return user;
            

        //TODO Retourner l'utilisateur avec son _id
        throw new Error('Not implemented method');

    }
    
    //Fait la création d'un utilisateur dans la base de données
    async createUser(username: string, hash: string): Promise<User | null>{
        //TODO Créer un utilisateur en fonction des information d'authentification
        //Utilisez l'interface User
        const user: User = {username: username, hash:hash};
        const newUser = await this._collection.insertOne(user);

        user['_id'] = newUser.insertedId;
        return user;

        // throw new Error('Not implemented method');

        //TODO Retourner le user créé avec son _id

    }

}