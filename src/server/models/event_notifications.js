module.exports = (sequelize, DataTypes) => {
  const Event_Notifications = sequelize.define('event_notifications', {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_email: DataTypes.STRING,
    room_id: DataTypes.INTEGER,
    event: DataTypes.STRING
  });

  return Event_Notifications;
};
