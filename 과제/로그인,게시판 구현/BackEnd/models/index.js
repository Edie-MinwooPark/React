const Sequelize = require("sequelize");
const config = require("../config")
const User = require("./users")
const Freeboard = require("./freeboard")

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Freeboard = Freeboard;

User.init(sequelize);
Freeboard.init(sequelize);

User.associate(db);
Freeboard.associate(db);

module.exports = db;