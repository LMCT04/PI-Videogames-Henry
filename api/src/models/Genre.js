const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('genre', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    }, { timestamps: false },);
};