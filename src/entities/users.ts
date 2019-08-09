import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users1')
export class Users {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying',
    })
    public name: string;
    
    @Column({
        type: 'character varying',
    })
    public email: string;

    @Column({
        type: 'character varying',
    })
    public password_hash: string;

    @Column({
        type: 'boolean',
    })
    public isActive: boolean;

}