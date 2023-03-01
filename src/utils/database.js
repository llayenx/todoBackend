const { portalSuspended } = require("pg-protocol/dist/messages")
const {Sequelize, HostNotFoundError} =  require("sequelize") 

const db = new Sequelize({
    database: "todos",
    port : "5433",
    Host : "localhost",
    username :"postgres",
    password : "931105",
    dialect :  "postgres"
})
module.exports = db