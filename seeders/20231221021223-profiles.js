'use strict';

const fs =require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let profiles= JSON.parse(fs.readFileSync('./data/profiles.json','utf8'))
    profiles.forEach(el=> {
      el.createdAt=new Date()
      el.updatedAt=new Date()
    });
    return queryInterface.bulkInsert('Profiles', profiles);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
