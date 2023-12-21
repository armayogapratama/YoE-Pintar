'use strict';

const fs =require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let courses= JSON.parse(fs.readFileSync('./data/courses.json','utf8'))
    courses.forEach(el=> {
      el.createdAt=new Date()
      el.updatedAt=new Date()
    });
    return queryInterface.bulkInsert('Courses', courses);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
