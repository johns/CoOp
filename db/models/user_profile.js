module.exports = (sequelize, DataTypes) => {
  const User_Profile = sequelize.define('user_profile', {
    user_email: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_picture: DataTypes.STRING
  });

  return User_Profile;
};
