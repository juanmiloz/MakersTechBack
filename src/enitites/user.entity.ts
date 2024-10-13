import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Preference } from "./preference.entity";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    UserID: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    Username: string;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
    Email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    Password: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    CreatedDate: Date;

    @OneToMany(() => Preference, preference => preference.user)
    preferences: Preference[];
}
