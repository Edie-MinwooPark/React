const Sequelize = require('sequelize');

class Freeboard extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            title : {
                type : Sequelize.STRING(40),
                allowNull : false
            },
            content : {
                type : Sequelize.STRING(256),
                allowNull : true
            },
            views : {
                type : Sequelize.INTEGER,
            }
        },
        {
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : "FreeBoard",
            tableName : "freeBoards",
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }

    static associate(db){
        db.Freeboard.belongsTo(db.User,{foreignKey : "user_id", targetKey : "id", onDelete : "CASCADE"})
    }
}

module.exports = Freeboard;