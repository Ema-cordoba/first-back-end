const { DataTypes } = require("sequelize");
const { db } = require("../database/db");

const Repair = db.define('repair',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Repair;