exports.up = function(knex) {
    return knex.schema.createTable('postimages', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image_url').notNullable();
        table.string('description');
        table.integer('like').defaultTo(0);
        table.integer('aspect').defaultTo(0);
        table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    });
      
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("postimages");
  };