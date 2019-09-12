
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 12345678901234567, make: 'Bugatti', model: 'Chiron SS', mileage: 123 },
      ]);
    });
};
