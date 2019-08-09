import { Heroes } from "../entities/heroes";
export declare const getAll: () => Promise<Heroes[]>;
export declare const save: (hero: Heroes) => Promise<Heroes>;
export declare const deleteHero: (id: number) => Promise<import("typeorm").DeleteResult>;
export declare const updateHero: (hero: Heroes) => Promise<Heroes>;
