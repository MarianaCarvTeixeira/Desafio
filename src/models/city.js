module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("City", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
  });

  return City;
};
