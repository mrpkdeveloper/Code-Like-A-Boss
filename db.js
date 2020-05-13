const sequelize = require('sequelize')
const db = new sequelize('codedb', 'codder', 'codpass', {
    dialect: 'mysql',
    host: 'localhost'
})

const user = db.define('user', {
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
        allowNull: false,
        unique: true
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