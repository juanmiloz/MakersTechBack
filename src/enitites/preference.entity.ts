import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';


@Entity('preferences')
export class Preference extends BaseEntity {
    @PrimaryGeneratedColumn()
    preferenceId: number;

    @ManyToOne(() => User, user => user.preferences, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ type: 'varchar', length: 100, nullable: true })
    category?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    brand?: string;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    maxPrice?: number;
}
