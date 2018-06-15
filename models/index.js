const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});
const Page = require('./page');
const User = require('./user');

db.authenticate().
then(() => {
  console.log('connected to the database');
})
module.exports = {
  db,
  Page,
  User
}
