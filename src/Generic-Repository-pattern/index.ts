/* eslint-disable @typescript-eslint/no-unused-vars */
import { Db, MongoClient } from "mongodb";

import { Hero } from "./entities/Hero";
import { Villain } from "./entities/Villain";
import { HeroRepository } from "./repositories/HeroRepository";
import { VillainRepository } from "./repositories/VillainRepository";

export async function GenericRepository(): Promise<void>{
    const conn = MongoClient.connect('mongodb://localhost:27017/supers')
    if(await conn)
        console.log('connected!')
    const db = (await conn).db('supers')

    await HeroTest(db)
    await VillainTest(db)
}

async function HeroTest(db: Db): Promise<void>{
    const hero = new Hero('batman', 15)
    const heroRepo = new HeroRepository(db, 'heros')

    const result = await heroRepo.create(hero)
        console.log(`hero inserted with ${result ? 'success' : 'fail'}`)

    const count = await heroRepo.countOfHeros()
        console.log('the amount of heros are: ', count)
}

async function VillainTest(db: Db){
    const villain = new Villain('coringa', 13)
    const villainRepo = new VillainRepository(db, 'villains')

    const result = await villainRepo.create(villain)
        console.log(`villain inserted with ${result ? 'success' : 'fail'}`)
    const count = await villainRepo.countOfVillains()
    console.log('the amount of villains are: ', count)
}