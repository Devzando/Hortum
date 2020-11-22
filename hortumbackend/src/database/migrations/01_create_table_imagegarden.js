exports.up = function(knex) {
    return knex.schema.createTable('imagegardens', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image_url').notNullable();
    });
      
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("imagegardens");
  };