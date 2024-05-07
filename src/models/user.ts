import { Column, BaseModel } from '@athenna/database'

export class User extends BaseModel {
  @Column()
  public id: number

  @Column({ isNullable: false })
  public name: string

  @Column({ isNullable: false, isUnique: true })
  public email: string

  @Column({ isNullable: false, isHidden: false })
  public password: string
}
