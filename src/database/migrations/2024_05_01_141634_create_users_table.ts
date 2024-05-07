import { BaseMigration, type DatabaseImpl } from '@athenna/database'

export class Users extends BaseMigration {
  public tableName = 'users'

  public async up(db: DatabaseImpl) {
    return db.createTable(this.tableName, builder => {
      builder.increments('id')
      builder.string('name').notNullable()
      builder.string('email').notNullable().unique()
      builder.string('password').notNullable()
    })
  }

  public async down(db: DatabaseImpl) {
    return db.dropTable(this.tableName)
  }
}
