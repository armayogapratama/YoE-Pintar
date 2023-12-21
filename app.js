/**
 * ! npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string
 *
 * ! npx sequelize-cli model:generate --name Profile --attributes name:string,dateOfBirth:date,hobby:string,gender:string,UserId:integer
 *
 * ! npx sequelize-cli model:generate --name Course --attributes name:string,description:string,duration:integer,CategoryId:integer
 *
 * ! npx sequelize-cli model:generate --name Category --attributes name:string,cost:integer
 *
 * ! npx sequelize-cli model:generate --name UserCourse --attributes UserId:integer,CourseId:integer
 */
