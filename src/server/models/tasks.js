module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('tasks', {
    task_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_email: DataTypes.STRING,
    room_id: DataTypes.INTEGER,
    task_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    progress: DataTypes.INTEGER,
    end_point: {
      type: DataTypes.INTEGER,
      allowNull: false
    }});

    return Tasks;
};
