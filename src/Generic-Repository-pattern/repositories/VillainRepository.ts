import { Villain } from '../entities/Villain';
import { BaseRepository } from './base/BaseRepository';

export class VillainRepository extends BaseRepository<Villain> {
    countOfVillains(): Promise<number> {
      return this._collection.countDocuments({})
    }
}
