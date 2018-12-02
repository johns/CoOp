module.exports = (sequelize, DataTypes) => {
  const Group_Member = sequelize.define('group_member', {
    member_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_email: DataTypes.STRING,
    date_joined: DataTypes.DATE,
    room_id: DataTypes.INTEGER
  });

  return Group_Member;
};
