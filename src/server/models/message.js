module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    room_id: DataTypes.INTEGER,
    user_email: DataTypes.STRING,
    message_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_sent: DataTypes.DATE
  });

  return Message;
};
