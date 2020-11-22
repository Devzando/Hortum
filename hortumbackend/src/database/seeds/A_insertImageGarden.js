exports.seed = function(knex) {
    return knex('imagegardens').insert([
      {name: 'gardenimg1', image_url: 'gardenimg1.svg'},
      {name: 'gardenimg2', image_url: 'gardenimg2.svg'},
      {name: 'gardenimg3', image_url: 'gardenimg3.svg'},
      {name: 'gardenimg4', image_url: 'gardenimg4.svg'},
      {name: 'gardenimg5', image_url: 'gardenimg5.svg'},
    ]);
  }