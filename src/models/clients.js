module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define("Clients", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    sex: DataTypes.CHAR(1),
    age: DataTypes.INTEGER,
    city: DataTypes.STRING,
  });
  return Clients;
};
