import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    commentType?: string;

    @Column()
    content!: string;

    @Column({ default: 0 })
    communityId?: number;
}
