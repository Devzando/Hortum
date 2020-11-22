exports.up = function(knex) {
    return knex.schema.createTable('gardens', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description');
        table.string('color').defaultTo('#32AC71');
        table.integer('imagegarden_id').unsigned().references('id').inTable('imagegardens').defaultTo(1);
        table.integer('user_id').unsigned().references('id').inTable('users');
    });
      
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("gardens");
  };