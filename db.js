const sequelize = require('sequelize')
const db = new sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'

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