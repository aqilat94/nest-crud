import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Breed {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}