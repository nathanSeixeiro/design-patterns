import { Hero } from '../entities/Hero';
import { BaseRepository } from './base/BaseRepository';

export class HeroRepository extends BaseRepository<Hero> {
    countOfHeros(): Promise<number> {
        return this._collection.countDocuments({})
    }
}