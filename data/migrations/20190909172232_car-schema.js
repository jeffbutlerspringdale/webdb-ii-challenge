
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('vin', 17).notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission type')
        tbl.string('title')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
