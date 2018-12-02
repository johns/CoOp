module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('room', {
    room_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    theme: DataTypes.INTEGER,
    room_photo: DataTypes.STRING
  });

  return Room;
};
