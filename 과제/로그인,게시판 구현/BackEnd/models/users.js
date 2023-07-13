const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init (sequelize){
        return super.init({
            user_id : {
                type : Sequelize.STRING(40),
                allowNull : false,
            },
            password : {
                type : Sequelize.STRING(64),
                allowNull : false,
            },

        },
        {
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : "User",
            tableName : "users",
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }

    static associate(db) {
        db.User.hasMany(db.Freeboard,{
            foreignKey : "user_id",
            sourceKey : "id",
            onDelete : "CASCADE"
        })
    }
}

module.exports = User;