var Sequelize = require('sequelize');
var connection = new Sequelize ('test_db', 'postgres', 'password', {
  dialect: 'postgres'
});
 var User_Profile = connection.define('user_profile', {
  user_email: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  display_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  profile_picture: Sequelize.STRING
});
 var Group_Member = connection.define('group_member', {
  member_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_email: Sequelize.STRING,
  date_joined: Sequelize.DATE,
  room_id: Sequelize.INTEGER
});
 var Room = connection.define('room', {
  room_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT,
  private: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  theme: Sequelize.INTEGER,
  room_photo: Sequelize.STRING
});
 var Message = connection.define('message', {
  message_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  room_id: Sequelize.INTEGER,
  user_email: Sequelize.STRING,
  message_content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  date_sent: Sequelize.DATE
});
 var Task = connection.define('task', {
  task_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_email: Sequelize.STRING,
  room_id: Sequelize.INTEGER,
  task_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_point: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  progress: Sequelize.INTEGER,
  end_point: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
 var Event_Notification = connection.define('event_notification', {
  event_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_email: Sequelize.STRING,
  room_id: Sequelize.INTEGER,
  event: Sequelize.STRING
});
 connection.sync();
