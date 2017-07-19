var sequelize = require('../conn');
const Sequelize = require('sequelize');

var User = sequelize.define('user', {
    firstName: { type: Sequelize.STRING, field: 'first_name' },
    lastName: { type: Sequelize.STRING, field: 'last_name' }
}, {
    freezeTableName: true
})

// User.sync({force:true});
module.exports = User;