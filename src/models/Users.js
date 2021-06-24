export default (sequelize, DataType) => {
    const User = sequelize.define('users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            allowNull: false,
            type: DataType.STRING
        },
        email: {
            allowNull: false,
            type: DataType.STRING
        },
        password: {
            allowNull: false,
            type: DataType.STRING(150)
        },
    });

    return User;
}