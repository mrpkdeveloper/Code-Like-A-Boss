const sequelize = require('sequelize')
const db = new sequelize('derk677teprv51', 'xpqcsqjnqgtylo', 'f7ec47a3f652d5ef09e99ac4466932bd5502384b7284b57287fe4207eacda0bd', {
    dialect: 'postgres',
    host: 'localhost',

})

const user = db.define('userinfo', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    address: {
        type: sequelize.STRING,
        allowNull: false,
    }
})
db.sync()
    .then(() => console.log('database synced successfully'))
    .catch((err) => console.error("error in creating database"))

exports = module.exports = {
    db, user
}