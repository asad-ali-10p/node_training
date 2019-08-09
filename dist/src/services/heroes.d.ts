import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';
export declare const getAll: () => Promise<Heroes[]>;
export declare const addHero: (hero: IHeroRequest) => Promise<Heroes>;
export declare const deleteHero: (id: number) => Promise<import("typeorm").DeleteResult>;
export declare const updateHero: (hero: IHeroRequest) => Promise<Heroes>;
