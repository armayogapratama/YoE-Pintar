'use strict';

const fs =require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let categories= JSON.parse(fs.readFileSync('./data/categories.json','utf8'))
    categories.forEach(el=> {
      el.createdAt=new Date()
      el.updatedAt=new Date()
    });
    return queryInterface.bulkInsert('Categories', categories);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
