import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class GeneralTestSet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'json' })
  questions!: any;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date | undefined;

}
