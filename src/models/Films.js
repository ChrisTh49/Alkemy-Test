export default (sequelize, DataType) => {
    const Films = sequelize.define('film', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: DataType.STRING,
        title: DataType.STRING,
        creationDate: DataType.STRING,
        score: DataType.INTEGER,
        genre: DataType.STRING
    });

    return Films;
};