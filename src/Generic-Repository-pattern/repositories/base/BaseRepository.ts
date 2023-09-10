/* eslint-disable @typescript-eslint/no-unused-vars */
import { IWrite, IRead } from "../interface";
import { MongoClient, Db, Collection, InsertOneResult, OptionalId } from 'mongodb';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _collection: Collection

    constructor(db: Db, collectionName: string){
        this._collection = db.collection(collectionName)
    }

    async create(item: T): Promise<boolean> {
        try {
            await this._collection.insertOne(item as OptionalId<T>);
            return true; // Inserção bem-sucedida
        } catch (error) {
            console.error('Erro durante a inserção:', error);
            return false; // Inserção falhou
        }
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}