import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class SpecialTestSet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'json' })
  questions!: any;

  @Column()
  program!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date | undefined;

}
