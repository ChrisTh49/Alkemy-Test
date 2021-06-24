export default ( sequelize, DataType ) => {
    const Character = sequelize.define('character', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: DataType.TEXT,
        name: DataType.STRING,
        age: DataType.INTEGER,
        weight: DataType.STRING,
        history: DataType.TEXT,
        movies: DataType.TEXT
    });
    return Character;
};